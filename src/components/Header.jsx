import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import Logo from "@/assets/logo.svg";
import VoiceIcon from "@/assets/asset 1.svg";
import voice from "@/assets/roar.mp3";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Team", href: "/team" },
  { name: "Work", href: "/work" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Header = ({ toggleDarkMode, darkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* ✅ Header with Dark Mode Support */}
      <header
        className={`fixed top-0 left-0 w-full py-4 px-6 flex justify-between items-center z-50 transition-all duration-300 shadow-md ${
          darkMode ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        {/* Left: Logo */}
        <div className="flex items-center">
          <Link to="/" aria-label="Logo">
            <img
              src={Logo}
              alt="Logo"
              className="h-8 transition-transform hover:scale-105"
            />
          </Link>
        </div>

        {/* Center: Dark Mode & Voice Icon */}
        <div className="flex items-center space-x-6">
          {/* Voice Icon */}
          {/* Voice Icon Button */}
          <button
            onClick={() => {
              const audio = new Audio(voice); // Use correct path
              audio.play();
            }}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            <img
              src={VoiceIcon}
              alt="Voice Control"
              className="w-6 h-6 dark:invert"
            />
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? (
              <Sun size={20} className="text-yellow-500" />
            ) : (
              <Moon size={20} className="text-gray-900" />
            )}
          </button>
        </div>

        {/* ✅ Menu Button (Toggles on Click) */}
        <button
          className="rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition z-50"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* ✅ Full-Screen Menu (With Dark Mode & No Background View) */}
      {menuOpen && (
        <div
          className={`fixed inset-0 flex flex-col items-start justify-center p-12 z-40 backdrop-blur-md transition-all duration-300 ${
            darkMode ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          {/* Close Button (Click to Close) */}
          <button
            className="absolute top-6 right-6 text-3xl"
            onClick={toggleMenu}
          >
            <X size={30} />
          </button>

          {/* Navigation Links */}
          <ul className="space-y-6 text-5xl font-bold uppercase">
            {navigation.map((item) => (
              <li key={item.name} className="transition hover:opacity-70">
                <Link to={item.href} onClick={toggleMenu}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Contact Info & Social Icons */}
          <div className="absolute bottom-12 right-12 text-lg">
            <p>hello@trionn.com</p>
            <p>+91 98241 82099</p>
            <div className="flex space-x-4 mt-4">
              {/* Add Social Media Icons */}
              <span className="text-3xl">🔴 🔵 🟣 🟠</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
