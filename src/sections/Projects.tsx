import iPhone15LandingPage from "@/assets/images/iphone15x-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';

const portfolioProjects = [
  {
    id: 1,
    title: "Apple iPhone 15 Page Clone",
    des: "dark",
    link: "https://iphone15x.netlify.app",
    image: iPhone15LandingPage,
  },
  {
    id: 2,
    title: "Light Saas Landing Page",
    des: "light",
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    id: 3,
    title: "AI Startup Landing Page",
    des: "Ai",
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-indigo-600 to-sky-600 text-transparent bg-clip-text text-center">
            A small selection of my {' '}
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">Recent Projects</h2>
        <p className="text-center md:text-lg lg:text-xl text-black/60 mt-4 max-w-md mx-auto">A showcase of my recent projects, highlighting innovative solutions and creative design in web development.</p>
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map(({ id, title, des, image, link }) => (
            <div key={id} className="bg-gray-200 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:border-2 after:border-black/20 after:rounded-3xl px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 after:pointer-events-none">
              <div className="absolute inset-0 -z-10 opacity-5" style={{
                backgroundImage: `url(${grainImage.src})`
              }}></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
              <h3 className="font-serif text-2xl md:text-4xl">{title}</h3>
              <hr className="border-t-2 border-black/5 mt-4 md:mt-5"/>
              <div className="flex flex-col gap-4  mt-2">
              <p className="inline-flex gap-2 font-bold uppercase tracking-widest text-sm md:text-base text-black/60">{des}</p>
              <a href={link}>
                <button className="bg-white text-gray-950 h-12 w-full md:w-auto rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:px-6">
                  <span>View Project</span>
                  <ArrowUpRightIcon className='size-4'/>
                </button>
              </a>
              </div>
              </div>
              <div className="relative">
              <Image className="mt-8 -mb-4 rounded-2xl md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" src={image} alt={title} />
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

