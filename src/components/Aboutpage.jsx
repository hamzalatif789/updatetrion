import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const headingRef = useRef(null);
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1.5,
        },
      }
    );

    gsap.fromTo(
      leftTextRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.3,
        scrollTrigger: {
          trigger: leftTextRef.current,
          start: "top 85%",
          end: "top 50%",
          scrub: 1.5,
        },
      }
    );

    gsap.fromTo(
      rightTextRef.current,
      { opacity: 0, x: 40 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.6,
        scrollTrigger: {
          trigger: rightTextRef.current,
          start: "top 90%",
          end: "top 50%",
          scrub: 1.5,
        },
      }
    );

    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.9,
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 90%",
          end: "top 50%",
          scrub: 1.5,
        },
      }
    );
  }, []);

  return (
    <div className="px-10 md:px-20 py-24 flex flex-col relative space-y-16">
      {/* Left Side - Heading & Text */}
      <div ref={headingRef} className="md:w-2/3 text-left">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-6xl md:text-9xl font-extrabold uppercase leading-tight tracking-tight"
        >
          WHO <br />
          WE ARE
        </motion.h1>
        <motion.p
          ref={leftTextRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-lg mt-4 md:w-3/4 leading-relaxed"
        >
          As an award-winning agency within the digital jungle,{" "}
          <span className="font-semibold">TRIONN®</span> transcends aesthetics,
          crafting your vision into a legacy that endures.
        </motion.p>
      </div>

      {/* Right Side - Content + Button */}
      <div className="w-full flex justify-end">
        <motion.div
          ref={rightTextRef}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="md:w-1/3 text-left"
        >
          <p className="text-lg md:text-xl mb-6 leading-relaxed">
            We roar with creativity, staying updated with the latest tech to
            make your brand a formidable force in the digital wilderness and
            deliver exceptional website and app experiences.
          </p>

          {/* Button */}
          <motion.button
            ref={buttonRef}
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.5)",
            }}
            transition={{ duration: 0.3 }}
            className="border border-gray-300 px-6 py-3 rounded-full transition-all duration-300 hover:bg-white hover:text-black font-semibold"
          >
            About Us
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
