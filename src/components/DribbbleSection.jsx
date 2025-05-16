import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import asset15 from "@/assets/asset 15.webp";
import asset16 from "@/assets/asset 16.webp";
import asset17 from "@/assets/asset 17.webp";
import asset18 from "@/assets/asset 18.webp";
import asset19 from "@/assets/asset 19.webp";
import asset20 from "@/assets/asset 20.webp";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const DribbbleSection = () => {
  const cardsRef = useRef([]);

  // Array of imported images
  const images = [asset15, asset16, asset17, asset18, asset19, asset20];

  useEffect(() => {
    // GSAP animation for card reveal on scroll
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          {
            autoAlpha: 0, // Controls visibility and opacity
            y: 50,
            rotationY: index % 2 === 0 ? -90 : 90, // Alternate rotation directions
          },
          {
            autoAlpha: 1,
            y: 0,
            rotationY: 0,
            duration: 1.2,
            ease: "power4.out",
            delay: index * 0.2,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });
  }, []);

  return (
    <section className="dribbble-section p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Dribbble Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="card bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              <img
                src={image} // Use the dynamic image from the array
                alt={`Project ${index + 1}`}
                className="w-full h-100 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DribbbleSection;
