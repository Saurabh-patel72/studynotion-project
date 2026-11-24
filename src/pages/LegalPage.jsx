import React from "react"
import { Link } from "react-router-dom"
import Footer from "../components/Common/Footer"

const LEGAL_CONTENT = {
  privacy: {
    title: "Privacy Policy",
    updated: "November 2026",
    intro:
      "At StudyNotion, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our learning platform.",
    sections: [
      {
        heading: "1. Information We Collect",
        body: "We collect information you provide directly when creating an account, enrolling in courses, or contacting support—such as your name, email address, account role (Student or Instructor), profile details, and course progress.",
      },
      {
        heading: "2. How We Use Your Information",
        body: "Your data is used to authenticate your account, deliver course content, track learning progress, process course enrollments, send essential account notifications (like OTP verification and password resets), and improve the platform experience.",
      },
      {
        heading: "3. Data Security & Storage",
        body: "Passwords are encrypted using industry-standard hashing, and authenticated requests are protected using JSON Web Tokens (JWT). We never sell your personal data to third parties.",
      },
      {
        heading: "4. Your Rights & Choices",
        body: "You can view, update, or delete your profile information at any time from your Dashboard Settings. For any privacy-related questions, reach out via our Contact Us page.",
      },
    ],
  },
  cookie: {
    title: "Cookie Policy",
    updated: "November 2026",
    intro:
      "This Cookie Policy explains how StudyNotion uses cookies and browser storage technologies to keep your session secure and provide a smooth learning experience.",
    sections: [
      {
        heading: "1. What Are Cookies?",
        body: "Cookies and local storage entries are small data files stored in your browser that help web applications remember your login state, preferences, and cart items across page reloads.",
      },
      {
        heading: "2. Essential Cookies & Storage We Use",
        body: "We use essential authentication tokens (HTTP-only cookies and localStorage) to keep you signed in, remember your shopping cart items, and preserve your active course playback progress.",
      },
      {
        heading: "3. Functional Preferences",
        body: "Some browser storage entries help maintain UI state such as selected dashboard tabs and course builder steps so you do not lose unsaved progress while navigating.",
      },
      {
        heading: "4. Managing Cookies",
        body: "You can clear or block cookies through your browser settings at any time. Please note that disabling essential cookies or local storage may prevent you from signing in or staying logged in.",
      },
    ],
  },
  terms: {
    title: "Terms & Conditions",
    updated: "November 2026",
    intro:
      "Welcome to StudyNotion. By accessing or using our platform, you agree to comply with these Terms & Conditions. Please read them carefully before creating an account or purchasing a course.",
    sections: [
      {
        heading: "1. Account Responsibilities",
        body: "You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your Student or Instructor account.",
      },
      {
        heading: "2. Course Enrollment & Access",
        body: "When you enroll in a course on StudyNotion, you receive a personal, non-transferable license to access the course videos and materials for your own educational use.",
      },
      {
        heading: "3. Instructor Content",
        body: "Instructors are responsible for ensuring that courses, thumbnails, and video lectures they publish are accurate, original, and do not infringe on third-party intellectual property.",
      },
      {
        heading: "4. Acceptable Use",
        body: "Users may not redistribute paid course content, attempt unauthorized access to platform APIs, or post abusive reviews. StudyNotion reserves the right to suspend accounts that violate these terms.",
      },
    ],
  },
}

function LegalPage({ type }) {
  const content = LEGAL_CONTENT[type] || LEGAL_CONTENT.privacy

  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] flex-col bg-richblack-900 text-richblack-5">
      <div className="mx-auto w-11/12 max-w-maxContent flex-1 py-12">
        <div className="mx-auto max-w-4xl rounded-xl border border-richblack-700 bg-richblack-800 p-6 sm:p-10">
          <p className="text-sm font-medium text-yellow-50">
            Last updated: {content.updated}
          </p>
          <h1 className="mt-2 text-3xl font-bold text-richblack-5 sm:text-4xl">
            {content.title}
          </h1>
          <p className="mt-4 leading-relaxed text-richblack-200">
            {content.intro}
          </p>

          <div className="mt-8 space-y-6 border-t border-richblack-700 pt-8">
            {content.sections.map((sec) => (
              <div key={sec.heading} className="space-y-2">
                <h2 className="text-xl font-semibold text-richblack-5">
                  {sec.heading}
                </h2>
                <p className="leading-relaxed text-richblack-300">{sec.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-richblack-700 pt-6 text-sm">
            <Link
              to="/privacy-policy"
              className="text-richblack-200 hover:text-yellow-50"
            >
              Privacy Policy
            </Link>
            <span className="text-richblack-600">|</span>
            <Link
              to="/cookie-policy"
              className="text-richblack-200 hover:text-yellow-50"
            >
              Cookie Policy
            </Link>
            <span className="text-richblack-600">|</span>
            <Link
              to="/terms"
              className="text-richblack-200 hover:text-yellow-50"
            >
              Terms &amp; Conditions
            </Link>
            <span className="text-richblack-600">|</span>
            <Link
              to="/contact"
              className="text-yellow-50 hover:underline"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default LegalPage
