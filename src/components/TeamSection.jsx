import * as React from "react";
import asset7 from "@/assets/asset 7.webp";
import asset9 from "../assets/asset 9.webp";
import asset10 from "../assets/asset 10.webp";
import asset11 from "../assets/asset 11.svg";
import asset12 from "../assets/asset 12.webp";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const teamMembers = [
  { name: "Malte Kramer", role: "Founder & CEO of Luxury Presence", image: asset7 },
  { name: "Doug Petrie", role: "Founder & CEO of Fast Resume", image: asset9 },
  { name: "Jane Doe", role: "CTO of Tech Innovators", image: asset10 },
  { name: "John Smith", role: "Head of Marketing at Digital Wave", image: asset11 },
  { name: "Emily Johnson", role: "Lead Designer at Creative Labs", image: asset12 },
];

export function TeamSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold">Our Creative Jungle</h2>
          <p className="text-lg mt-2 text-gray-400">
            Designers, thinkers, and strategists uniting like a lion's roar.
          </p>
        </div>
        
        {/* Updated Carousel with Loop and 2 Cards */}
        <Carousel 
          className="w-full"
          opts={{ 
            loop: true,          // Enable infinite loop
            align: "center",     // Better card alignment
            slidesToScroll: 2    // Scroll two at a time
          }}
        >
          <CarouselContent>
            {teamMembers.map((member, index) => (
              <CarouselItem 
                key={index} 
                className="basis-full md:basis-1/2 lg:basis-1/2" // 2 cards on desktop
              >
                <div className="p-2">
                  <Card className="bg-gray-800 rounded-xl border border-gray-700 p-6 text-center h-full flex flex-col justify-between">
                    <CardContent className="flex flex-col items-center justify-center h-full">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-32 h-32 rounded-full mb-4 object-cover"
                      />
                      <h3 className="text-2xl text-white font-semibold">{member.name}</h3>
                      <p className="text-sm text-gray-400 mb-4">{member.role}</p>
                      <button className="mt-4 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full transition">
                        Watch now!
                      </button>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}