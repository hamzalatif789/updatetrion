const AchievementCard = ({ achievement, mouseX, mouseY, index }) => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: true, margin: "0px 0px -100px 0px" });
    const isEven = index % 2 === 0;
  
    // Mouse tilt calculations (keep existing)
    const rotateX = useTransform(mouseY, y => {
      if (!cardRef.current) return 0;
      const rect = cardRef.current.getBoundingClientRect();
      return ((y - rect.top - rect.height/2) / 20) * -1;
    });
    
    const rotateY = useTransform(mouseX, x => {
      if (!cardRef.current) return 0;
      const rect = cardRef.current.getBoundingClientRect();
      return ((x - rect.left - rect.width/2) / 20);
    });
  
    // Animation configurations based on index
    const animationConfig = {
      initial: {
        opacity: 0,
        x: isEven ? "-100%" : "100%",
        rotateZ: isEven ? -45 : 45,
      },
      keyframes: {
        x: isEven ? 
          ["-100%", "-157.938px", "-36.5877px", "0px"] :
          ["100%", "157.938px", "36.5877px", "0px"],
        rotateZ: isEven ?
          [-45, -11.4633, -2.6556, 0] :
          [45, 11.4633, 2.6556, 0],
        opacity: [0, 0.7453, 0.941, 1]
      }
    };
  
    return (
      <motion.div 
        ref={cardRef}
        className="bg-white p-8 rounded-xl shadow-lg relative overflow-hidden"
        style={{
          rotateX,
          rotateY,
          transformPerspective: 1000,
          background: 'rgba(31,32,34,.4)',
          borderRadius: '1.5rem',
          // Add other base styles from your CSS
        }}
        initial={animationConfig.initial}
        animate={isInView ? {
          x: animationConfig.keyframes.x,
          rotateZ: animationConfig.keyframes.rotateZ,
          opacity: animationConfig.keyframes.opacity
        } : {}}
        transition={{
          duration: 2,
          ease: [0.16, 1, 0.3, 1],
          times: [0, 0.33, 0.66, 1]
        }}
        whileHover={{ scale: 1.05 }}
      >
        {/* Your card content */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/50 to-transparent opacity-25" />
        <div className="relative z-10">
          <div className="text-4xl font-bold text-blue-600 mb-2">
            {achievement.number}{achievement.suffix}
          </div>
          <div className="text-gray-600 whitespace-pre-line">
            {achievement.label}
          </div>
        </div>
        <motion.div 
          className="absolute inset-0 border-2 border-blue-200 rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      </motion.div>
    );
  };