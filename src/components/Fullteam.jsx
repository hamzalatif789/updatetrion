import * as React from "react";
import asset10 from "@/assets/team/10.webp";
import asset11 from "@/assets/team/11.webp";
import asset12 from "@/assets/team/12.webp";
import asset13 from "@/assets/team/13.webp";
import asset14 from "@/assets/team/14.webp";
import asset15 from "@/assets/team/15.webp";
import asset16 from "@/assets/team/16.webp";
import asset17 from "@/assets/team/17.webp";
import asset18 from "@/assets/team/18.webp";
import asset19 from "@/assets/team/19.webp";
import asset20 from "@/assets/team/20.webp";
import asset21 from "@/assets/team/21.webp";
import asset22 from "@/assets/team/22.webp";
import asset23 from "@/assets/team/23.webp";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

// Team data with names and roles
const teamData = [
  { name: "John Doe", role: "Creative Director", image: asset10 },
  { name: "Jane Smith", role: "Lead Designer", image: asset11 },
  { name: "Alex Johnson", role: "Marketing Strategist", image: asset12 },
  { name: "Emily Brown", role: "UI/UX Designer", image: asset13 },
  { name: "Michael Lee", role: "Frontend Developer", image: asset14 },
  { name: "Sarah Wilson", role: "Content Writer", image: asset15 },
  { name: "David Garcia", role: "Backend Developer", image: asset16 },
  { name: "Laura Martinez", role: "Graphic Designer", image: asset17 },
  { name: "Chris Evans", role: "Project Manager", image: asset18 },
  { name: "Anna Taylor", role: "SEO Specialist", image: asset19 },
  { name: "James White", role: "Data Analyst", image: asset20 },
  { name: "Olivia Harris", role: "Social Media Manager", image: asset21 },
  { name: "Daniel Clark", role: "QA Engineer", image: asset22 },
  { name: "Sophia Lewis", role: "DevOps Engineer", image: asset23 },
];

export function FullTeam() {
  return (
    <section className="py-12 ">
      <div className="container mx-auto px-4">
        {/* Image Carousel */}
        <Carousel
          className="w-full"
          opts={{
            loop: true,
            align: "center",
            slidesToScroll: 2,
          }}
        >
          <CarouselContent>
            {teamData.map((member, index) => (
              <CarouselItem
                key={index}
                className="basis-full md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-2">
                  <div className="relative group overflow-hidden rounded-xl">
                    {/* Team Member Image */}
                    <img
                      src={member.image}
                      alt={`Team Member ${member.name}`}
                      className="w-full h-auto object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Overlay with Name and Role */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-2xl font-bold text-white">
                        {member.name}
                      </h3>
                      <p className="text-lg text-gray-300 mt-1">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}

export default FullTeam;