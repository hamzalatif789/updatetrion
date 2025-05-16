import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import BannerButtons from "@/components/homebutton";
import RecentWork from "@/components/RecentWork";
import Video from "@/components/Video";
import ProjectSection from "@/components/ProjectSection";
import AboutSection from "@/components/Aboutpage";
import StatsCard from "@/components/Statscard";
import PartnerLove from "@/components/PartnerLove";
import { TeamSection } from "@/components/TeamSection";
import ScrollVelocity from "@/components/scrolltext";
import DribbbleSection from "@/components/DribbbleSection";
import AnimatedTextSection from "@/components/AnimatedTextSection";
import SocialLinks from "@/components/socialLinks";
import { HeroSection } from "@/components/ui/Good";
import Ballpit from "@/components/Bubbles";
import asset27 from "@/assets/asset 27.svg";
import First from "@/components/First";


const Home = () => {
  return (
    <>
      <main className="relative flex items-center justify-center pt-[150px] ">
        <div className="text-center h-auto w-auto ">
         <div><First/> </div>
          <div><BannerButtons /></div>
          <div><Video /></div>
          <div><RecentWork /></div>
          <div><ProjectSection /></div>
          <div><AboutSection /></div>
          <div><StatsCard /></div>
          <div><PartnerLove /></div>
          <div><TeamSection /></div>

          <div className="h-auto w-[1300px] pt-10">
            <ScrollVelocity texts={["React Bits", "Scroll Down"]} velocity={100} className="custom-scroll-text" />
          </div>
          <div><DribbbleSection /></div>
          <div><AnimatedTextSection /></div>
          <div><SocialLinks /></div>
        </div>
      </main>
    </>
  );
};

export default Home;
