import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const RecentWork = () => {
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power3.out" }
    );
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.5, delay: 0.6, ease: "power3.out" }
    );
  }, []);

  return (
    <section className="py-20 px-10 md:px-32">
      <div className="max-w-7xl mx-auto flex flex-col">
        {/* Heading Section */}
        <h2
          ref={headingRef}
          className="text-[6rem] md:text-[8rem] leading-none font-bold uppercase tracking-tight text-left"
        >
          Recent <br />
          <span className="inline-block">Work</span>
        </h2>

        {/* Description & Button in Row */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-6">
          <p ref={textRef} className="text-lg  md:w-1/2">
            In the creative wilderness,
            <br /> clients find our work truly
            <br /> beloved.
          </p>
          <button
            ref={buttonRef}
            className="border border-[#e0eeee] py-3 px-8 rounded-3xl text-lg font-semibold mt-4 md:mt-0
            hover:bg-[#e0eeee] hover:text-black transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            Explore Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
