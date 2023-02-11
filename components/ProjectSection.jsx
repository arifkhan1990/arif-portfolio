import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Fariwala Pizza Shop",
    description:
      "Fariwala is a local pizza shop, Huge people too mush love this local pizza brand.",
    image: "/fariwala.png",
    github: "https://github.com/arifkhan1990/Fariwala-pizzashop",
    link: "https://fariwala-pizza-shop.vercel.app/",
  },
  {
    name: "AI-Image Generator",
    description:
      "AI-Image Generator is a web app that generates an appreciative AI images.",
    image: "/p4.png",
    github: "https://github.com/arifkhan1990/agamir-ai-image-generator",
    link: "https://agamir-ai-image-generator.vercel.app/",
  },
  {
    name: "Metavers Clone",
    description: "Metaverse Madness Site clone.",
    image: "/p3.png",
    github: "https://github.com/arifkhan1990/metavers-clone-site",
    link: "https://metavers-clone-site.vercel.app/",
  },
  {
    name: "GPT-3",
    description: "Let's Build Something amazing with GPT-3 OpenAI.",
    image: "/p2.png",
    github: "https://github.com/arifkhan1990/gpt3_design",
    link: "https://gpt3-design-seven.vercel.app/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-3xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
