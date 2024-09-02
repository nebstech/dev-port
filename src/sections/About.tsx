import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from '@/assets/icons/star.svg';
import bookImage from '@/assets/images/book-cover.png';
import Image from "next/image";
import JavascriptIcon from '@/assets/icons/square-js.svg';
import HTMLIcon from '@/assets/icons/html5.svg';
import CSSIcon from '@/assets/icons/css3.svg';
import ReactIcon from '@/assets/icons/react.svg';
import ChromIcon from '@/assets/icons/chrome.svg';
import GithubIcon from '@/assets/icons/github.svg';
import { TechIcon } from "@/components/TechIcon";

const toolboxItems = [
  {
    title: 'Javascript',
    iconType: JavascriptIcon,
  },
  {
    title: 'HTML5',
    iconType: HTMLIcon,
  },
  {
    title: 'CSS3',
    iconType: CSSIcon,
  },
  {
    title: 'React',
    iconType: ReactIcon,
  },
  {
    title: 'Chrome',
    iconType: ChromIcon,
  },
  {
    title: 'Github',
    iconType: GithubIcon,
  },
];

export const AboutSection = () => {
  return <div>
    <SectionHeader eyebrow="About Me" title="A glimpse into my world" description="Learn more about who I am, what I do, and what inspires me."/>
    <div>
      <Card>
        <div>
          <StarIcon />
          <h3>My Reads</h3>
          <p>Explore the books shaping my perspectives.</p>
        </div>
        <Image src={bookImage} alt='Book cover'/>
      </Card>
      <Card>
        <div>
          <StarIcon />
          <h3>My Toolbox</h3>
          <p>Explore the technologies and tools I use to craft exceptional digital experiences. </p>
        </div>
        <div>
          {toolboxItems.map(item => (
            <div key={item.title}>
              <TechIcon component={item.iconType}/>
              <span>{item.title}</span>
              </div>
          ))}
        </div>
      </Card>
    </div>
  </div>;
};
