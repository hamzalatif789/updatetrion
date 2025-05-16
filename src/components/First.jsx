import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const First = () => {
  const textRef = useRef(null);
  const subTextRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
    gsap.fromTo(
      subTextRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power3.out" }
    );
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.5, delay: 0.6, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="text-center">
      {/* Main Heading */}
      <h1
        ref={textRef}
        className="text-6xl md:text-8xl font-bold tracking-tight uppercase"
      >
        <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
          Roar in the{" "}
        </span>
        <span className="block md:inline">Digital Wilderness.</span>
      </h1>

      {/* Subtext */}
      <p
        ref={subTextRef}
        className="mt-4 max-w-xl mx-auto text-sm md:text-base text-gray-300"
      >
        We roar with success, delivering the{" "}
        <span className="text-purple-400 font-semibold">Trionn™</span> through
        versatile design, branding, and the latest tech development to
        companies.
      </p>

      {/* Scroll Button */}
      <div className="mt-6">
        <button
          ref={buttonRef}
          className="border border-gray-500 p-3 rounded-full text-gray-400 hover:bg-gray-800 hover:scale-110 transition duration-300 shadow-lg hover:shadow-purple-500/50"
        >
          ⬇
        </button>
      </div>
    </div>
  );
};

export default First;
