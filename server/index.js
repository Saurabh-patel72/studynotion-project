// Importing necessary modules and packages
const dotenv = require("dotenv");
// Load environment variables FIRST — before anything else reads process.env
dotenv.config();

const express = require("express");
const app = express();
const userRoutes = require("./routes/user");
const profileRoutes = require("./routes/profile");
const courseRoutes = require("./routes/Course");
const paymentRoutes = require("./routes/Payments");
const contactUsRoute = require("./routes/Contact");
const database = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const os = require("os");
const { cloudinaryConnect } = require("./config/cloudinary");
const fileUpload = require("express-fileupload");

// Setting up port number — dotenv is already loaded above so PORT is available
const PORT = process.env.PORT || 4000;

// Connecting to database
database.connect();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
	cors({
		// Explicitly allow only the local React dev server.
		// Using "*" with credentials:true is blocked by all modern browsers.
		origin: process.env.FRONTEND_URL || "http://localhost:3000",
		credentials: true,
	})
);
app.use(
	fileUpload({
		useTempFiles: true,
		tempFileDir: os.tmpdir(),
	})
);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Connecting to cloudinary
cloudinaryConnect();

// Setting up routes
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/course", courseRoutes);
app.use("/api/v1/payment", paymentRoutes);
app.use("/api/v1/reach", contactUsRoute);

// Testing the server
app.get("/", (req, res) => {
	return res.json({
		success: true,
		message: "Your server is up and running ...",
	});
});

// Listening to the server
app.listen(PORT, () => {
	console.log(`App is listening at ${PORT}`);
});

// End of code.
