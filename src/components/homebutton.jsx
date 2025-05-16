import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "cursify";

const MagneticButton = ({ href, label }) => {
  const buttonRef = useRef(null);

  useGSAP(() => {
    if (buttonRef.current) {
      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <motion.a
      ref={buttonRef}
      href={href}
      className="relative inline-block overflow-hidden rounded-lg  px-6 py-3 font-semibold shadow-lg transition-transform duration-300 ease-out hover:scale-105"
      whileHover={{ scale: 1.1 }}
    >
      {label}
      <span className="absolute inset-0  opacity-0 transition-opacity duration-300 hover:opacity-100"></span>
    </motion.a>
  );
};

const BannerButtons = () => {
  return (
    <div className="flex justify-between mx-[70px]">
      <MagneticButton href="/work" label="Explore Work" />
      <MagneticButton href="/contact" label="Get in Touch" />
    </div>
  );
};

export default BannerButtons;
