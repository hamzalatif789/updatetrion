import Aspireteam from "@/components/Aspireteam";
import Creative from "@/components/Creative";
import { ScrollVelocity } from "@/components/EventTeam";

import FullTeam from "@/components/Fullteam";
import JoinTeam from "@/components/JoinTeam";
import Teamhero from "@/components/Teamhero";
import Teamtext from "@/components/Teamtext";
import WildTeam from "@/components/WildTeam";
import React from "react";

import image2 from "@/assets/events/2.webp";
import image3 from "@/assets/events/3.webp";
import image4 from "@/assets/events/4.webp";
import image5 from "@/assets/events/5.webp";
import image6 from "@/assets/events/6.webp";
import image7 from "@/assets/events/7.webp";
import image8 from "@/assets/events/8.webp";
import image9 from "@/assets/events/9.webp";
import image10 from "@/assets/events/10.webp";
import image11 from "@/assets/events/11.webp";
import image12 from "@/assets/events/12.webp";
import image13 from "@/assets/events/13.webp";
import image14 from "@/assets/events/14.webp";
const splitIntoGroups = (images, numGroups) => {
  const groupSize = Math.ceil(images.length / numGroups);
  return Array.from({ length: numGroups }, (_, i) =>
    images.slice(i * groupSize, (i + 1) * groupSize)
  );
};
const allImages = [
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
];
const groups = splitIntoGroups(allImages, 2);
function Team() {
  return (
    <>
      <div className="text-center h-auto w-auto pt-[150px]">
        <Teamhero />
      </div>
      <div>
        <Teamtext />
      </div>
      <div>
        <Creative />
      </div>
      <div>
        <WildTeam />
      </div>
      <div>
        <FullTeam />
      </div>
      <div>
        <JoinTeam />
      </div>
      <div className="px-[300px]">
        <Aspireteam />
      </div>
      <div className="h-auto w-full max-w-[1300px] mx-auto pt-10">
        <div className="fade-edge">
          <ScrollVelocity
            groups={groups}
            velocity={[100, -150]} // Different speeds for each row
            scrollerClassName="py-4"
            numCopies={6} // More copies for smoother scroll
          />
        </div>
      </div>
    </>
  );
}

export default Team;
