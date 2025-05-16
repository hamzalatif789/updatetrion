import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TeamSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } },
  };

  return (
    <div className="container mx-auto px-4 py-20 md:py-32">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Heading Section */}
        <motion.div
          variants={textVariants}
          className="lg:w-1/2 text-left mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight md:leading-snug">
            In the heart of our <br />
            wild team, we find <br />
            our strength.
          </h2>
        </motion.div>

        {/* Paragraph Section */}
        <motion.div
          variants={paragraphVariants}
          className="text-right"
        >
          <p className="text-lg md:text-xl leading-relaxed">
            In our creative jungle, designers, thinkers, strategists
            <br />
            unite like a lion's roar, crafting vibrant projects
            <br />
            resonating with the wild symphony of innovation.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TeamSection;