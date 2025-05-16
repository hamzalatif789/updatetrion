import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Teamtext = () => {
  useEffect(() => {
    gsap.fromTo(
      ".team-text",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".team-text",
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play reverse play reverse"
        }
      }
    );
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <p className="font-semibold text-4xl text-center team-text">
        Our work excels, driven by our<br /> wild and creative team, delivering<br /> the highest quality.
      </p>
    </div>
  );
};

export default Teamtext;
