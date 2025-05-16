import { useEffect, useRef } from "react";
import gsap from "gsap";

const PartnerLove = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.3 }
    );
  }, []);

  return (
    <section ref={sectionRef} className=" p-10 flex items-center">
      <div ref={textRef} className="w-full flex justify-between items-start">
        <h1 className="text-6xl md:text-8xl font-bold leading-none ">
          PARTNER <br /> LOVE
        </h1>
        <p className="text-md md:text-lg text-right max-w-xs">
          Take heed, as the lion's roar in our client reviews resounds.
        </p>
      </div>
    </section>
  );
};

export default PartnerLove;
