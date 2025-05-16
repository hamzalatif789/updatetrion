import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedText = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const lines = textRef.current.children;

    gsap.fromTo(
      lines,
      { opacity: 0, y: 50, filter: "blur(10px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        stagger: 0.2, // Adds delay between lines
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div
      ref={textRef}
      className="text-9xl font-bold  text-center leading-tight pt-6"
    >
      <div>Join our</div>
      <div>Jungle</div>
      <div>Trek</div>
    </div>
  );
};

export default AnimatedText;
