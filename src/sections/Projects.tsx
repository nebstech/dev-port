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
    <section className="pb-16">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-indigo-600 to-sky-600 text-transparent bg-clip-text text-center">
            A small selection of my {' '}
          </p>
        </div>
        <h2 className="font-serif text-3xl text-center mt-6">Recent Projects</h2>
        <p className="text-center text-black/60 mt-4">A showcase of my recent projects, highlighting innovative solutions and creative design in web development.</p>
        <div className="flex flex-col mt-10 gap-20">
          {portfolioProjects.map(({ id, title, des, image, link }) => (
            <div key={id} className="bg-gray-200 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:border-2 after:border-black/20 after:rounded-3xl px-8 pt-8 after:pointer-events-none">
              <div className="absolute inset-0 -z-10 opacity-5" style={{
                backgroundImage: `url(${grainImage.src})`
              }}></div>
              <h3 className="font-serif text-2xl">{title}</h3>
              <hr className="border-t-2 border-black/5 mt-4"/>
              <p className="inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-black/60">{des}</p>
              <a href={link}>
                <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                  <span>View Project</span>
                  <ArrowUpRightIcon className='size-4'/>
                </button>
              </a>
              <Image className="mt-8 -mb-4 rounded-3xl" src={image} alt={title} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

