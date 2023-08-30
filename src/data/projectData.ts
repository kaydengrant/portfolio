import TheDeliciousBrewLogo from '../../public/TheDeliciousBrewLogo.png';
import AvenueInConsultingLogo from '../../public/AvenueInConsultingLogo.png';
import GreenhouseGlobalStatusProjectImage from '../../public/greenhouseProjectImage.png';
import PitGuruProjectImage from '../../public/pitguruProjectImage.png';

export type DataProps = {
  key: number;
  title: string;
  description: string;
  repoLink?: string;
  demoLink?: string;
  projectImage: any;
};

export const projectData: Array<DataProps> = [
  {
    key: 0,
    title: 'The Delicious Brew',
    description: 'Coffee e-commerce & blog',
    repoLink: 'https://github.com/kaydengrant/the-delicious-brew',
    demoLink: 'https://thedeliciousbrew.vercel.app/',
    projectImage: TheDeliciousBrewLogo,
  },
  {
    key: 1,
    title: 'Avenue In Consulting Website Design',
    description: 'Worked with client to re-design company website.',
    demoLink: 'https://avenueinconsulting.com/',
    projectImage: AvenueInConsultingLogo,
  },
  {
    key: 2,
    title: 'Greenhouse Global Status',
    description:
      'A tool for visualizing global trends in regards to climate change using a heat-map of the world.',
    repoLink: 'https://github.com/Greenhouse-Effect/greenhouse-global-status',
    demoLink:
      'http://greenhouse-global-status.s3-website-us-west-2.amazonaws.com/',
    projectImage: GreenhouseGlobalStatusProjectImage,
  },
  {
    key: 3,
    title: 'PitGuru',
    description:
      'A highly customizable racing overlay for racing simulation games.',
    projectImage: PitGuruProjectImage,
  },
];
