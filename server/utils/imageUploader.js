const cloudinary = require("cloudinary").v2
const fs = require("fs")
const path = require("path")

const isCloudinaryConfigured = () => {
  const { CLOUD_NAME, API_KEY, API_SECRET } = process.env
  return (
    CLOUD_NAME &&
    API_KEY &&
    API_SECRET &&
    !CLOUD_NAME.startsWith("your_") &&
    !API_KEY.startsWith("your_") &&
    !API_SECRET.startsWith("your_")
  )
}

exports.uploadImageToCloudinary = async (file, folder, height, quality) => {
  if (!isCloudinaryConfigured()) {
    const uploadsDir = path.join(__dirname, "..", "uploads")
    fs.mkdirSync(uploadsDir, { recursive: true })
    const ext = path.extname(file.name || "") || ".jpg"
    const fileName = `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`
    const destPath = path.join(uploadsDir, fileName)
    fs.copyFileSync(file.tempFilePath, destPath)
    const port = process.env.PORT || 4000
    return {
      secure_url: `http://localhost:${port}/uploads/${fileName}`,
    }
  }

  const options = { folder }
  if (height) {
    options.height = height
  }
  if (quality) {
    options.quality = quality
  }
  options.resource_type = "auto"
  console.log("OPTIONS", options)
  return await cloudinary.uploader.upload(file.tempFilePath, options)
}
