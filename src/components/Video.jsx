import React, { useState, useEffect } from "react";
import vi from "../assets/intro-video.mp4";

const Video = () => {
  const [videoStyle, setVideoStyle] = useState({
    transform: "translate(0px, -283.14px) scale(0.14, 0.14)",
    borderRadius: "100rem",
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY < 200) {
        // Stage 1: Smallest size
        setVideoStyle({
          transform: "translate(0px, -283.14px) scale(0.14, 0.14)",
          borderRadius: "100rem",
        });
      } else if (scrollY >= 200 && scrollY < 500) {
        // Stage 2: Medium size
        setVideoStyle({
          transform: "translate3d(0px, -94.823px, 0px) scale(0.712, 0.712)",
          borderRadius: "34.4875rem",
        });
      } else if (scrollY >= 500) {
        // Stage 3: Largest size
        setVideoStyle({
          transform: "translate3d(0px, -1.9235px, 0px) scale(0.9942, 0.9942)",
          borderRadius: "2.1692rem",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="video"
      className="tr__container tr__video__wrapper w-full flex items-center justify-center mx-auto px-[7rem]"
    >
      <video
        width="100%"
        height="100%"
        loop
        playsInline
        autoPlay
        muted
        className="w-full h-auto transition-all duration-500 ease-in-out"
        style={videoStyle}
      >
        <source src={vi} type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
