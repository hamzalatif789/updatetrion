import { useRef, useEffect, useState } from "react";
import { useSprings, animated } from "@react-spring/web";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BlurText = ({
  text = "Join our Jungle Trek",
  delay = 200,
  className = "",
  animateBy = "words", // 'words' or 'letters'
  direction = "top", // 'top' or 'bottom'
}) => {
  const elements = animateBy === "words" ? text.split(" ") : text.split("");
  const ref = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView) {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: direction === "top" ? -50 : 50, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, [inView, direction]);

  return (
    <p ref={ref} className={`text-4xl font-bold text-white ${className}`}>
      {elements.map((char, index) => (
        <animated.span
          key={index}
          className="inline-block transition-transform will-change-[transform,opacity,filter]"
          style={{ display: "inline-block", marginRight: animateBy === "words" ? "5px" : "0px" }}
        >
          {char}
        </animated.span>
      ))}
    </p>
  );
};

export default BlurText;
