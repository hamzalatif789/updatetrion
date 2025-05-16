import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const sectionRef = useRef();
  const textRefs = useRef([]);
  const buttonRef = useRef();
  const h1Ref = useRef(null); // Ref for the <h1> element

  useEffect(() => {
    // Clear refs on each render
    textRefs.current = [];

    // Entrance animations
    gsap.from(textRefs.current, {
      opacity: 0,
      y: 50,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none"
      }
    });

    gsap.from(buttonRef.current, {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "bounce.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none"
      }
    });

    // Continuous animations for text characters
    const textLoops = textRefs.current.map(text => 
      gsap.to(text, {
        y: 5,
        duration: 2,
        yoyo: true,
        repeat: -1,
        paused: true,
        ease: "power1.inOut"
      })
    );

    // Continuous animation for the button
    const buttonLoop = gsap.to(buttonRef.current, {
      y: 5,
      duration: 2,
      yoyo: true,
      repeat: -1,
      paused: true,
      ease: "power1.inOut"
    });

    // Continuous animation for the <h1> element
    const h1Loop = gsap.to(h1Ref.current, {
      y: 10, // Moves up and down
      scale: 1.05, // Slightly scales up and down
      duration: 2,
      yoyo: true,
      repeat: -1,
      paused: true,
      ease: "power1.inOut"
    });

    // ScrollTrigger controller
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 50%",
      end: "bottom 50%",
      onEnter: () => {
        textLoops.forEach(t => t.play());
        buttonLoop.play();
        h1Loop.play(); // Start <h1> animation
      },
      onLeave: () => {
        textLoops.forEach(t => t.pause());
        buttonLoop.pause();
        h1Loop.pause(); // Pause <h1> animation
      },
      onEnterBack: () => {
        textLoops.forEach(t => t.play());
        buttonLoop.play();
        h1Loop.play(); // Resume <h1> animation
      },
      onLeaveBack: () => {
        textLoops.forEach(t => t.pause());
        buttonLoop.pause();
        h1Loop.pause(); // Pause <h1> animation
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const renderAnimatedText = (text) => {
    textRefs.current = [];
    return text.split('').map((char, index) => (
      <span 
        key={index}
        ref={el => textRefs.current.push(el)}
        className="inline-block"
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen flex flex-row justify-between items-center p-8"
    >
      <div className="text-center space-y-8">
        {/* <h1> with continuous animation */}
        <h1 
          ref={h1Ref} // Attach ref to <h1>
          className="text-6xl md:text-8xl font-bold mb-4"
        >
          {renderAnimatedText('TRION TO')}
        </h1>
        <div className="text-5xl md:text-7xl font-bold text-red-500 mt-8">
          {renderAnimatedText('ROAR!')}
        </div>
      </div>
      <div>
        <button
          ref={buttonRef}
          className="mt-12 px-8 py-4 bg-transparent border-2 border-red-600 rounded-full 
                   transition-colors duration-300 text-xl hover:bg-red-600 hover:text-white"
        >
          Terry Glick
        </button>
      </div>
    </section>
  );
}