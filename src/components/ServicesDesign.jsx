import { motion } from "framer-motion";

const ServicesDesign = ({ isDarkMode }) => {
  // Theme-based styling
  const bgColor = isDarkMode ? "bg-[#131313]" : "bg-[#e4ecec]";
  const textColor = isDarkMode ? "text-white" : "text-black";

  // Dynamic service data
  const designServices = [
    ["User interface", "User experience", "Websites", "Visual design", "Prototypes"],
    ["Web & Mobile apps", "SaaS product design", "Design systems", "Interaction design"]
  ];

  const developmentServices = [
    ["React JS", "Next JS", "Node JS", "Angular JS", "WordPress", "Magento", "Shopify", "Laravel", "PHP"],
    ["HTML5 & CSS3", "LESS & SASS", "Bootstrap", "Tailwind", "Foundation", "Javascript", "jQuery"]
  ];
  const development = [
    ["Visual identity", "Branding strategy", "Mockups"],
    ["Graphic designs", "Style guide", "Typography"]
  ];

  const renderServiceList = (services) => (
    <div className={`grid grid-cols-2 gap-4 text-2xl ${textColor}`}>
      {services.map((column, index) => (
        <ul key={index} className="space-y-2">
          {column.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      ))}
    </div>
  );

  return (
    <>
      {/* Design Section */}
      <div className={`${bgColor} rounded-2xl p-10 mx-8 flex justify-between items-start mb-3`}>
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-5xl font-bold ${textColor}`}
        >
          DESIGN
        </motion.h2>

        <div className="max-w-xl">
          <p className={`mb-6 leading-relaxed text-xl ${textColor}`}>
            Your designs, a fierce roar in the digital <br /> wilderness, carve an indelible social footprint, <br /> capturing the very essence of your unique <br /> identity.
          </p>
          {renderServiceList(designServices)}
        </div>
      </div>

      {/* Development Section */}
      <div className={`${bgColor} rounded-2xl p-10 flex mx-8 justify-between items-start`}>
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-5xl font-bold uppercase ${textColor}`}
        >
          develop<br />ment
        </motion.h2>

        <div className="max-w-xl">
          <p className={`mb-6 leading-relaxed text-xl ${textColor}`}>
            In this design jungle, we don't just roar <br /> concepts; we bring them to life with <br /> practicality, emphasizing micro animations <br /> and interactions.
          </p>
          {renderServiceList(developmentServices)}
        </div>
      </div>
      <div className={`${bgColor} rounded-2xl mt-3 p-10 mx-8 flex justify-between items-start`}>
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-5xl font-bold uppercase ${textColor}`}
        >
         brand <br />
         ing
        </motion.h2>

        <div className="max-w-xl">
          <p className={`mb-6 leading-relaxed text-xl ${textColor}`}>
          Our goal is your brand's wild influence. <br /> Exclusive logos, mockups, and corporate <br /> identities make your unique value stand out.
          </p>
          {renderServiceList(development)}
        </div>
      </div>
    </>
  );
};

export default ServicesDesign;
