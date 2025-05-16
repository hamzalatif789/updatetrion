import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const ServicesCards = ({ isDarkMode }) => {
  const bgColor = isDarkMode ? "bg-[#131313]" : "bg-[#e4ecec]";
  const textColor = isDarkMode ? "text-white" : "text-black";

  // Your original slides data
  const slides = [
    {
      title: "Research and Planning",
      items: [
        "Project Planning",
        "Expectations Setting",
        "Competitor Analysis",
        "Digital Strategy",
        "UX Research",
      ],
    },
    {
      title: "Creativity and UX Design",
      items: [
        "Visual Moodboards",
        "User Interface Design",
        "User Experience Design",
        "Interaction Design",
        "Design System",
      ],
    },
    {
      title: "Development",
      items: [
        "Frontend Development",
        "Backend Development",
        "API Integration",
        "Performance Optimization",
        "Testing & QA",
      ],
    },
    {
      title: "Marketing Strategy",
      items: [
        "SEO Optimization",
        "Social Media Strategy",
        "Content Marketing",
        "Email Campaigns",
        "Market Analysis",
      ],
    },
    {
      title: "Product Launch",
      items: [
        "Go-to-Market Strategy",
        "User Onboarding",
        "Feedback Collection",
        "Post-Launch Support",
        "Performance Review",
      ],
    },
  ];

  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const scrollX = useMotionValue(0);
  const [maxScroll, setMaxScroll] = useState(0);

  // Calculate max scroll position
  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      setMaxScroll(container.scrollWidth - container.clientWidth);
    }
  }, []);

  // Handle mouse move
  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const mouseX = e.clientX - rect.left; // Mouse position relative to container
    const progress = mouseX / rect.width; // Progress (0 to 1)
    const newX = progress * maxScroll;

    scrollX.set(newX);
  };

  // Smooth transformation
  const x = useTransform(scrollX, (val) => -val);

  return (
    <div
      ref={containerRef}
      className="relative overflow-x-hidden"
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Cards Container */}
      <motion.div
        style={{ x }}
        className="flex gap-8 pl-8 py-12 cursor-grab active:cursor-grabbing"
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${bgColor} rounded-2xl p-10 min-w-[500px] flex-shrink-0`}
          >
            <h2 className={`text-5xl font-bold ${textColor}`}>
              {index + 1}.<br />
              {slide.title}
            </h2>
            <ul className={`mt-6 space-y-2 text-2xl ${textColor}`}>
              {slide.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ServicesCards;