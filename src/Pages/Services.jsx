import ServicesDesign from "@/components/ServicesDesign";
import Serviceshero from "@/components/Serviceshero";
import ServicesLion from "@/components/ServicesLion";
import Servicestext from "@/components/Servicestext";
import Serviceswild from "@/components/Serviceswild";
import React from "react";
import { ScrollVelocity } from "@/components/EventTeam";

import asset10 from "@/assets/expertise/angular.svg";
import asset2 from "@/assets/expertise/bootstrap.svg";
import asset3 from "@/assets/expertise/css3.svg";
import asset4 from "@/assets/expertise/figma.svg";
import asset5 from "@/assets/expertise/html5.svg";
import asset6 from "@/assets/expertise/jquery.svg";
import asset7 from "@/assets/expertise/jsfoundation.svg";
import asset8 from "@/assets/expertise/laravel.svg";
import asset9 from "@/assets/expertise/less.svg";
import asset11 from "@/assets/expertise/magento.svg";
import asset12 from "@/assets/expertise/nodejs.svg";
import asset13 from "@/assets/expertise/php.svg";
import asset14 from "@/assets/expertise/nextjs.svg";
import asset15 from "@/assets/expertise/react.svg";
import asset16 from "@/assets/expertise/sass.svg";
import asset17 from "@/assets/expertise/sketch.svg";
import asset18 from "@/assets/expertise/tailwindcss.svg";
import asset19 from "@/assets/expertise/wordpress.svg";
import { Button } from "@/components/ui/button";
import ServicesCards from "@/components/ServicesCards";

const splitIntoGroups = (images, numGroups) => {
  const groupSize = Math.ceil(images.length / numGroups);
  return Array.from({ length: numGroups }, (_, i) =>
    images.slice(i * groupSize, (i + 1) * groupSize)
  );
};
const allImages = [
  asset2,
  asset3,
  asset4,
  asset5,
  asset6,
  asset7,
  asset8,
  asset9,
  asset10,
  asset11,
  asset12,
  asset13,
  asset14,
  asset15,
  asset16,
  asset17,
  asset18,
  asset19,
 
];
const groups = splitIntoGroups(allImages, 2);

function Services() {
  return (
    <>
      <div className="text-center h-auto w-auto pt-[150px]">
        <Serviceshero />
      </div>
      <div>
        <Servicestext />
      </div>
      <div>
        <ServicesLion />
      </div>
      <div>
        <Serviceswild />
      </div>
      <div className="mx-[100px]">
        <ServicesDesign />
      </div>
      <div className="h-auto w-full max-w-[1300px] mx-auto pt-10 mt-[100px]">
        <div className="fade-edge">
          <ScrollVelocity
            groups={groups}
            velocity={[100, -150]} // Different speeds for each row
            scrollerClassName="py-4"
            numCopies={6} // More copies for smoother scroll
          />
        </div>
      </div>
      <div className="flex items-center justify-center mt-[50px]">
        <Button>Let,s Connect</Button>
      </div>
      <div>
        <ServicesCards/>
      </div>
    </>
  );
}

export default Services;
