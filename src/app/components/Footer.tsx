"use client"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-slate-800 text-white">
      {/* Contact Info Bar */}
      <div className="px-4 py-8 md:px-8 lg:px-16">
        <div className="bg-white rounded-2xl p-6 md:p-8 text-slate-800 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">SAMRATH EPC</h3>
                <p className="text-sm text-gray-600">PRIVATE LIMITED</p>
                <p className="text-xs text-gray-500">Developing Nation & Developing Trust</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-12">
              {/* Office Location */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Office Location</p>
                  <p className="font-semibold">Noida</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Send Email</p>
                  <p className="font-semibold">info@samrathepc.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Phone Number</p>
                  <p className="font-semibold">+91 120-4511368</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="px-4 py-12 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* About Company */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              About Company
              <div className="flex items-center gap-2 mt-2">
                <div className="w-8 h-0.5 bg-orange-500"></div>
                <div className="w-16 h-0.5 bg-white"></div>
              </div>
            </h3>
            <p className="text-gray-300 leading-relaxed">
              We are a leading EPC (Engineering, Procurement and Construction) company specializing in delivering key
              government projects that enhance infrastructure and public services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Quick Link
              <div className="flex items-center gap-2 mt-2">
                <div className="w-8 h-0.5 bg-orange-500"></div>
                <div className="w-16 h-0.5 bg-white"></div>
              </div>
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors flex items-center gap-2">
                  <span className="text-orange-500">»</span> Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors flex items-center gap-2">
                  <span className="text-orange-500">»</span> About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors flex items-center gap-2">
                  <span className="text-orange-500">»</span> Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors flex items-center gap-2">
                  <span className="text-orange-500">»</span> Projects
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors flex items-center gap-2">
                  <span className="text-orange-500">»</span> Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Our Services
              <div className="flex items-center gap-2 mt-2">
                <div className="w-8 h-0.5 bg-orange-500"></div>
                <div className="w-16 h-0.5 bg-white"></div>
              </div>
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors flex items-center gap-2">
                  <span className="text-orange-500">»</span> Highways Construction
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors flex items-center gap-2">
                  <span className="text-orange-500">»</span> Water Supply Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors flex items-center gap-2">
                  <span className="text-orange-500">»</span> Water treatment Plant and Sewage Treatment Plant
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors flex items-center gap-2">
                  <span className="text-orange-500">»</span> Power transmission
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors flex items-center gap-2">
                  <span className="text-orange-500">»</span> Allied services
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 px-4 py-6 md:px-8 lg:px-16">
        <div className="text-center text-gray-400">
          <p>Copyright © 2024 SAMRATH EPC PRIVATE LIMITED All Rights Reserved.</p>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center shadow-lg transition-colors z-50"
        aria-label="Back to top"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  )
}

