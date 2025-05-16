import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Serviceswild = () => {
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
    <div className="container mx-auto px- py-20 md:py-32">
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
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight md:leading-snug">
          We're here to make tech businesses roar in <br />
          the digital jungle, crafting valuable impact<br />
          through design, branding, and development<br/>services.
          </h2>
        </motion.div>

        {/* Paragraph Section */}
        <motion.div
          variants={paragraphVariants}
          className="text-right"
        >
          <p className="text-lg md:text-xl leading-relaxed">
          Challenges are the soil where our growth blossoms. Armed with digital
            <br />
            prowess, we fearlessly overcome them. Bring your branding, web design,
            <br />
            and creative challenges; our lionhearted approach will leave a lasting
            <br />impression.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Serviceswild;