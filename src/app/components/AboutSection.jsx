"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>Docker</li>
                <li>Docker Compose</li>
                <li>Kubernetes</li>
                <li>Git</li>
                <li>GitHub</li>
                <li>Nginx</li>
                <li>Nginx Proxy Manager</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>University of Life</li>
                <li>University of Life</li>
                <li>University of Life</li>
                <li>University of Life</li>
                <li>University of Life</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li>AWS</li>
                <li>Google Cloud Platform</li>
                <li>Kubernetes</li>
                <li>Docker</li>
            </ul>
        )
    }
]

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image 
          src="/images/about-image.png" 
          width={500} 
          height={500} 
          alt="A description of the about image" // Added alt attribute here
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ea
            impedit assumenda, rerum veritatis sint voluptates eos enim tempora
            earum mollitia nihil iure officia voluptatum, iste odit consequuntur
            tenetur esse consequatur at soluta eius? Modi tempore soluta porro!
            Facilis tempora consectetur quod dolore aut. Voluptas nemo
            accusantium enim maiores hic.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find((data) => data.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
