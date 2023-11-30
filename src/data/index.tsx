import {
  SiAmazonaws,
  SiCss3,
  SiDocker,
  SiElectron,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiFramer,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiSanity,
  SiSquarespace,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

import TheDeliciousBrewLogo from '../../public/TheDeliciousBrewLogo.png';
import AvenueInConsultingLogo from '../../public/AvenueInConsultingLogo.png';
import GreenhouseGlobalStatusProjectImage from '../../public/greenhouseProjectImage.png';
import PitGuruProjectImage from '../../public/pitguruProjectImage.png';

export type ProjectDataProps = {
  title: string;
  description: string;
  link: string;
  tools: any;
  date: string;
  projectImage: any;
};

type SkillsDataProps = {
  title: string;
  icon: any;
  link: string;
};

export const projectData: ProjectDataProps[] = [
  {
    title: 'The Delicious Brew',
    description: 'Coffee themed e-commerce website with a blog.',
    link: 'https://thedeliciousbrew.vercel.app/',
    tools: [
      <SiTypescript size={25} />,
      <SiReact size={25} />,
      <SiNextdotjs size={25} />,
      <SiSanity size={25} />,
      <SiTailwindcss size={25} />,
      <SiFigma size={25} />,
      <SiFramer size={25} />,
    ],
    date: 'June 2023',
    projectImage: TheDeliciousBrewLogo,
  },
  {
    title: 'Avenue In Consulting Website Design',
    description: 'Company website redesign.',
    link: 'https://avenueinconsulting.com/',
    tools: [
      <SiSquarespace size={25} />,
      <SiHtml5 size={25} />,
      <SiCss3 size={25} />,
    ],
    date: 'August 2023',
    projectImage: AvenueInConsultingLogo,
  },
  {
    title: 'Greenhouse Global Status',
    description:
      'An interactive heat-map illustrating global climage change trends.',
    link: 'http://greenhouse-global-status.s3-website-us-west-2.amazonaws.com/',
    tools: [
      <SiJavascript size={25} />,
      <SiReact size={25} />,
      <SiNodedotjs size={25} />,
      <SiExpress size={25} />,
      <SiMysql size={25} />,
      <SiPython size={25} />,
    ],
    date: 'February 2023',
    projectImage: GreenhouseGlobalStatusProjectImage,
  },
  {
    title: 'PitGuru',
    description:
      'A highly customizable racing overlay for racing simulation games.',
    link: 'https://update.pitguru.app/',
    tools: [
      <SiTypescript size={25} />,
      <SiReact size={25} />,
      <SiElectron size={25} />,
      <SiTailwindcss size={25} />,
      <SiFirebase size={25} />,
    ],
    date: 'April 2023',
    projectImage: PitGuruProjectImage,
  },
];

export const skillsData: SkillsDataProps[] = [
  { title: 'React', icon: <SiReact size={25} />, link: 'https://react.dev/' },
  {
    title: 'TypeScript',
    icon: <SiTypescript size={25} />,
    link: 'https://www.typescriptlang.org/',
  },
  {
    title: 'Node.js',
    icon: <SiNodedotjs size={25} />,
    link: 'https://nodejs.org/en/',
  },
  {
    title: 'Tailwind CSS',
    icon: <SiTailwindcss size={25} />,
    link: 'https://tailwindcss.com/',
  },
  {
    title: 'Framer Motion',
    icon: <SiFramer size={25} />,
    link: 'https://www.framer.com/motion/',
  },
  {
    title: 'Python',
    icon: <SiPython size={25} />,
    link: 'https://www.python.org/',
  },
  {
    title: 'Next.js',
    icon: <SiNextdotjs size={25} />,
    link: 'https://nextjs.org/',
  },
  {
    title: 'Express.js',
    icon: <SiExpress size={25} />,
    link: 'https://expressjs.com/',
  },
  { title: 'Git', icon: <SiGit size={25} />, link: 'https://git-scm.com/' },
  {
    title: 'Docker',
    icon: <SiDocker size={25} />,
    link: 'https://www.docker.com/',
  },
  {
    title: 'AWS',
    icon: <SiAmazonaws size={25} />,
    link: 'https://aws.amazon.com/',
  },
  {
    title: 'MySQL',
    icon: <SiMysql size={25} />,
    link: 'https://www.mysql.com/',
  },
  {
    title: 'Figma',
    icon: <SiFigma size={25} />,
    link: 'https://www.figma.com/',
  },
];
