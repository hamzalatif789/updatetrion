import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const achievements = [
  { id: 1, number: "50+", label: "Awards & Recognition", gradient: "from-blue-500 to-purple-500" },
  { id: 2, number: "900+", label: "Projects Completed", gradient: "from-green-500 to-teal-500" },
  { id: 3, number: "20+", label: "Creative Minds", gradient: "from-pink-500 to-red-500" },
  { id: 4, number: "20+", label: "Years of Experience", gradient: "from-yellow-500 to-orange-500" },
];

const AchievementCard = ({ number, label, gradient }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 50, rotateY: 15 },
      {
        opacity: 1,
        y: 0,
        rotateY: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className={`relative w-[400px] h-[300px] rounded-xl shadow-2xl text-center p-8 flex flex-col items-center justify-center transition-all duration-500 bg-gradient-to-br ${gradient} text-white`}
      whileHover={{ scale: 1.08, rotate: 5 }}
      transition={{ type: "spring", stiffness: 250 }}
    >
      {/* Number Animation */}
      <motion.div
        className="text-6xl font-extrabold relative z-10"
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.6 }}
      >
        {number}
      </motion.div>

      {/* Label Animation */}
      <motion.div
        className="mt-4 text-xl font-semibold relative z-10"
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {label}
      </motion.div>
    </motion.div>
  );
};

const AchievementsSection = () => (
  <div className="flex flex-col items-center justify-center px-8 py-20">
    <motion.h1
      className="text-5xl font-bold mb-12 text-gray-900 dark:text-white"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      Our Achievements
    </motion.h1>

    {/* Grid Layout for Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {achievements.map((achievement) => (
        <AchievementCard
          key={achievement.id}
          number={achievement.number}
          label={achievement.label}
          gradient={achievement.gradient}
        />
      ))}
    </div>
  </div>
);

export default AchievementsSection;
