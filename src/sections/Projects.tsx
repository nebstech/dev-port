import Image from 'next/image';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import { SectionHeader } from '@/components/SectionHeader';
import { Card } from '@/components/Card';

import iPhone15LandingPage from '@/assets/images/iphone15x-landing-page.png';
import blockForgeLandingPage from '@/assets/images/blockforge-landing-page.png';
import ogImage from '@/assets/images/OG Image.png';

const portfolioProjects = [
  {
    id: 1,
    title: "iPhone 15 Page Clone",
    des: "Check out my iPhone 15 clone built with Next.js, GSAP, and Three.js.",
    link: "https://iphone15x.netlify.app/",
    image: iPhone15LandingPage,
  },
  {
    id: 2,
    title: "Blockchain Blog",
    des: "Blockforge is a blockchain blog I created using Astro.JS, Tailwind, and Framer Motion.",
    link: "https://blocforge.netlify.app/",
    image: blockForgeLandingPage,
  },
  {
    id: 3,
    title: "FizziPop",
    des: "FizziPop",
    link: "#",
    image: ogImage,
  },
];

export const ProjectsSection = () => {
  return (
    <section id='projects' className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="A small selection of my "
          title="Recent Projects"
          description="A showcase of my recent projects, highlighting innovative solutions and creative design in web development."
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, index) => (
            <Card
              key={project.id}
              className="px-8 pb-0 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${index * 40}px)`, 
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <h3 className="font-serif text-2xl md:text-4xl">{project.title}</h3>
                  <hr className="border-t-2 border-black/5 mt-4 md:mt-5" />
                  <div className="flex flex-col gap-4 mt-2">
                    <p className="inline-flex gap-2 font-bold uppercase tracking-widest text-sm md:text-base text-black/60">
                      {project.des}
                    </p>
                    <a href={project.link}>
                      <button className="bg-white text-gray-950 h-12 w-full md:w-auto rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:px-6">
                        <span>View Project</span>
                        <ArrowUpRightIcon className="size-4" />
                      </button>
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    className="mt-8 -mb-4 rounded-2xl md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                    src={project.image}
                    alt={project.title}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
