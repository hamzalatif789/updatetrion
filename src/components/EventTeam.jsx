import { useRef, useLayoutEffect, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue, // Ensure this is imported
  useVelocity,
  useAnimationFrame,
} from "framer-motion";

// useElementWidth hook remains the same
function useElementWidth(ref) {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    function updateWidth() {
      if (ref.current) setWidth(ref.current.offsetWidth);
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [ref]);

  return width;
}

export const ScrollVelocity = ({
  scrollContainerRef,
  groups = [],
  velocity = 100,
  className = "",
  damping = 50,
  stiffness = 400,
  numCopies = 6,
  velocityMapping = { input: [0, 1000], output: [0, 5] },
  parallaxClassName,
  scrollerClassName,
  parallaxStyle,
  scrollerStyle,
}) => {
  function VelocityRow({
    images,
    baseVelocity = velocity,
    scrollContainerRef,
    className = "",
    damping,
    stiffness,
    numCopies,
    velocityMapping,
    parallaxClassName,
    scrollerClassName,
    parallaxStyle,
    scrollerStyle,
  }) {
    const baseX = useMotionValue(0); // Now properly imported
    const scrollOptions = scrollContainerRef ? { container: scrollContainerRef } : {};
    const { scrollY } = useScroll(scrollOptions);
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: damping ?? 50,
      stiffness: stiffness ?? 400,
    });
    const velocityFactor = useTransform(
      smoothVelocity,
      velocityMapping?.input || [0, 1000],
      velocityMapping?.output || [0, 5],
      { clamp: false }
    );

    const copyRef = useRef(null);
    const copyWidth = useElementWidth(copyRef);

    function wrap(min, max, v) {
      const range = max - min;
      return ((v - min) % range + range) % range + min;
    }

    const x = useTransform(baseX, (v) => {
      if (copyWidth === 0) return "0px";
      return `${wrap(-copyWidth, 0, v)}px`;
    });

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
      moveBy += directionFactor.current * moveBy * velocityFactor.get();
      baseX.set(baseX.get() + moveBy);
    });

    const spans = [];
    for (let i = 0; i < (numCopies ?? 6); i++) {
      spans.push(
        <div
          className={`flex-shrink-0 flex ${className}`}
          key={i}
          ref={i === 0 ? copyRef : null}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="h-32 md:h-48 w-auto object-cover mx-2 md:mx-4 rounded-lg shadow-lg"
              alt={`Scrolling content ${index}`}
            />
          ))}
        </div>
      );
    }

    return (
      <div className={`${parallaxClassName} overflow-hidden`} style={parallaxStyle}>
        <motion.div
          className={`${scrollerClassName} flex`}
          style={{ x, ...scrollerStyle }}
        >
          {spans}
        </motion.div>
      </div>
    );
  }

  return (
    <section className="space-y-8">
      {groups.map((group, index) => (
        <VelocityRow
          key={index}
          images={group}
          baseVelocity={Array.isArray(velocity) ? velocity[index] : velocity}
          scrollContainerRef={scrollContainerRef}
          damping={damping}
          stiffness={stiffness}
          numCopies={numCopies}
          velocityMapping={velocityMapping}
          parallaxClassName={parallaxClassName}
          scrollerClassName={scrollerClassName}
          parallaxStyle={parallaxStyle}
          scrollerStyle={scrollerStyle}
        />
      ))}
    </section>
  );
};