import React from "react";
import { motion } from "framer-motion";
import asset21 from "@/assets/asset 21.svg";
import asset22 from "@/assets/asset 22.svg";
import asset23 from "@/assets/asset 23.svg";
import asset24 from "@/assets/asset 24.svg";
import asset25 from "@/assets/asset 25.svg";

const socialLinks = [
  { name: "Dribbble", href: "https://dribbble.com/trionndesign", imgSrc: asset21 },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/trionndesign", imgSrc: asset24 },
  { name: "Instagram", href: "https://www.instagram.com/trionndesign", imgSrc: asset23 },
  { name: "Facebook", href: "https://www.facebook.com/TrionnDesign", imgSrc: asset22 },
  { name: "Behance", href: "https://www.behance.net/trionndesign", imgSrc: asset25 },
];

const SocialLinks = () => {
  return (
    <div className="flex flex-col items-start space-y-4 m-20">
      {socialLinks.map((link, index) => (
        <motion.a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between w-full border-b border-gray-400 py-4 group"
          initial={{ x: 0 }}
          whileHover={{ x: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <span className=" text-4xl font-medium transition-transform group-hover:translate-x-2">
            {link.name}
          </span>
          <motion.img
            src={link.imgSrc}
            alt={link.name}
            className="h-8 w-8 opacity-80 transition-transform group-hover:scale-110"
          />
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;
