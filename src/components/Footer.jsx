import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUp } from "lucide-react";
import asset27 from "@/assets/asset 27.svg";
import torch from "@/assets/torch.png";

import Ballpit from "@/components/Bubbles";

gsap.registerPlugin(ScrollTrigger);

export function Footer() {
  // State for mouse position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHoveringImage, setIsHoveringImage] = useState(false);

  // Refs for GSAP animations
  const sectionRef = useRef();
  const textRefs = useRef([]);
  const buttonRef = useRef();
  const h1Ref = useRef(null);
  const imageContainerRef = useRef(null);

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Handle image hover state
  const handleImageHover = (isHovering) => {
    setIsHoveringImage(isHovering);
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // GSAP animations
  useEffect(() => {
    // Clear refs on each render
    textRefs.current = [];

    // Entrance animations
    gsap.from(textRefs.current, {
      opacity: 0,
      y: 50,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(buttonRef.current, {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "bounce.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    });

    // Continuous animations for text characters
    const textLoops = textRefs.current.map((text) =>
      gsap.to(text, {
        y: 5,
        duration: 2,
        yoyo: true,
        repeat: -1,
        paused: true,
        ease: "power1.inOut",
      })
    );

    // Continuous animation for the button
    const buttonLoop = gsap.to(buttonRef.current, {
      y: 5,
      duration: 2,
      yoyo: true,
      repeat: -1,
      paused: true,
      ease: "power1.inOut",
    });

    // Continuous animation for the <h1> element
    const h1Loop = gsap.to(h1Ref.current, {
      y: 10,
      scale: 1.05,
      duration: 2,
      yoyo: true,
      repeat: -1,
      paused: true,
      ease: "power1.inOut",
    });

    // ScrollTrigger controller
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 50%",
      end: "bottom 50%",
      onEnter: () => {
        textLoops.forEach((t) => t.play());
        buttonLoop.play();
        h1Loop.play();
      },
      onLeave: () => {
        textLoops.forEach((t) => t.pause());
        buttonLoop.pause();
        h1Loop.pause();
      },
      onEnterBack: () => {
        textLoops.forEach((t) => t.play());
        buttonLoop.play();
        h1Loop.play();
      },
      onLeaveBack: () => {
        textLoops.forEach((t) => t.pause());
        buttonLoop.pause();
        h1Loop.pause();
      },
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Render animated text
  const renderAnimatedText = (text) => {
    textRefs.current = [];
    return text.split("").map((char, index) => (
      <span
        key={index}
        ref={(el) => textRefs.current.push(el)}
        className="inline-block"
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <>
      {/* Main Section */}
      <section
        ref={sectionRef}
        className="min-h-screen flex flex-row justify-between items-center p-8"
      >
        <div className="text-center space-y-8">
          <h1 ref={h1Ref} className="text-6xl md:text-8xl font-bold mb-4">
            {renderAnimatedText("TRION TO")}
          </h1>
          <div className="text-5xl md:text-7xl font-bold text-red-500 mt-8">
            {renderAnimatedText("ROAR!")}
          </div>
        </div>
        <div>
          <button
            ref={buttonRef}
            className="mt-12 px-8 py-4 bg-transparent border-2 border-red-600 rounded-full 
                   transition-colors duration-300 text-xl hover:bg-red-600 hover:text-white"
          >
            Terry Glick
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-3 items-center border-t border-b border-gray-700 py-8">
          {/* Left Section - Email */}
          <div className="flex flex-col">
            <span className="text-sm text-gray-400 mb-2">Email</span>
            <a
              href="mailto:hello@trionn.com"
              className="text-xl font-light hover:underline"
            >
              hello@trionn.com
            </a>
          </div>

          {/* Center Section - Call */}
          <div className="flex flex-col text-center">
            <span className="text-sm text-gray-400 mb-2">Call</span>
            <a
              href="tel:+919824182099"
              className="text-xl font-light hover:underline"
            >
              +91 98241 82099
            </a>
          </div>

          {/* Right Section - Skype */}
          <div className="flex flex-col items-end">
            <span className="text-sm text-gray-400 mb-2">Skype</span>
            <a
              href="skype:talk.trionn"
              className="text-xl font-light hover:underline"
            >
              talk.trionn
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between items-center mt-8">
          <p className="text-gray-400 text-sm">©2025 TRIONN®</p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded-full hover:bg-gray-700 transition"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </footer>

      {/* Torch Effect (Only on Trionn Image) */}
      <div
        ref={imageContainerRef}
        className="relative"
        onMouseEnter={() => handleImageHover(true)}
        onMouseLeave={() => handleImageHover(false)}
        style={{ cursor: isHoveringImage ? `url(${torch}), auto` : "auto" }}
      >
        
        
        <img
          alt="Trionn"
          loading="lazy"
          width={1440}
          height={305}
          decoding="async"
          className="w-full "
          src={asset27}
          style={{ color: "transparent" }}
        />
        
        {isHoveringImage && (
          <div
            className="torch-light"
            style={{
              position: "absolute",
              top: mousePosition.y - imageContainerRef.current.getBoundingClientRect().top - 150,
              left: mousePosition.x - imageContainerRef.current.getBoundingClientRect().left - 150,
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              pointerEvents: "none",
              boxShadow: "0 0 150px 100px rgba(255, 255, 255, 0.8)",
              mixBlendMode: "screen",
              
            }}
          />
        )}
      </div>
    </>
  );
}