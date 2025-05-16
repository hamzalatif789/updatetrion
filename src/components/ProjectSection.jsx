import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

// Import images
import asset4 from "../assets/asset 4.webp";
import asset5 from "../assets/asset 5.webp";
import asset6 from "../assets/asset 6.webp";

gsap.registerPlugin(ScrollTrigger);

const ProjectSection = () => {
  const cardRefs = useRef([]);
  const contentRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          end: "top 40%",
          scrub: 1.5,
        },
      });

      gsap.fromTo(
        contentRefs.current[index],
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: contentRefs.current[index],
            start: "top 95%",
            end: "top 40%",
            scrub: 1.5,
            toggleActions: "play none reverse none",
          },
        }
      );

      tl.fromTo(
        card,
        { x: index % 2 === 0 ? 150 : -150, opacity: 0.2, scale: 0.95 },
        { x: 0, opacity: 1, scale: 1, duration: 2, ease: "power4.out" }
      );
    });
  }, []);

  // Define projects with dynamic images
  const projects = [
    { title: "LOFTLOOM", description: "UI Design, UX, Wireframe", image: asset4 },
    { title: "IMUSIC", description: "Research, UX, UI Design", image: asset5 },
    { title: "TECHNIS", description: "UX, UI Design, Development", image: asset6 },
  ];

  return (
    <div className="space-y-24 flex flex-col items-center px-6 md:px-16 lg:px-24 py-20">
      {projects.map((project, index) => (
        <div key={index} className="w-full max-w-6xl">
          <div className={`flex flex-col md:flex-row gap-14 items-center ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
            {/* Text Section */}
            <div ref={(el) => (contentRefs.current[index] = el)} className="text-center md:text-left w-full md:w-1/2">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="text-5xl font-extrabold drop-shadow-lg dark:text-white text-black"
              >
                {project.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-3 text-lg leading-relaxed dark:text-gray-300 text-gray-700"
              >
                {project.description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Button
                  variant="outline"
                  className="mt-5 border-gray-500 dark:text-white text-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 px-6 py-2 rounded-full shadow-lg hover:shadow-black/50 dark:hover:shadow-white/50"
                >
                  View Project
                </Button>
              </motion.div>
            </div>

            {/* Image Section */}
            <motion.div
              ref={(el) => (cardRefs.current[index] = el)}
              className="relative w-full md:w-1/2 flex justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="overflow-hidden rounded-3xl shadow-2xl border-none transform transition-transform duration-500">
                <CardContent className="p-0">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover rounded-3xl"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectSection;
