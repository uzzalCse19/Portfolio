import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto text-center px-4">

        {/* Social Icons */}
        <div className="flex justify-center space-x-5 mb-6">
          <a
            href="https://github.com/uzzalCse19"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition"
          >
            <FaGithub className="text-lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/md-uzzal-python/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition"
          >
            <FaLinkedin className="text-lg" />
          </a>
        </div>

        {/* Footer Links */}
        <div className="flex justify-center space-x-6 text-sm mb-6 flex-wrap">
          <a href="/" className="hover:text-white transition">About</a>
          <a href="/contact" className="hover:text-white transition">Contact</a>
          <a href="#" className="hover:text-white transition">Privacy</a>
          <a href="#" className="hover:text-white transition">Terms of Use</a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Your Name. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
