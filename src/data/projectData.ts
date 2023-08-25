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
    demoLink: 'https://the-delicious-brew.vercel.app/',
    projectImage: '/TheDeliciousBrewLogo.png',
  },
  {
    key: 1,
    title: 'Avenue In Consulting Website Design',
    description: 'Worked with client to re-design company website',
    demoLink: 'https://avenueinconsulting.com/',
    projectImage: '/AvenueInConsultingLogo.png',
  },
  {
    key: 2,
    title: 'Greenhouse Global Status',
    description:
      'A website for understanding global trends in regards to climate change using a heat-map of the world.',
    repoLink: 'https://github.com/Greenhouse-Effect/greenhouse-global-status',
    demoLink:
      'http://greenhouse-global-status.s3-website-us-west-2.amazonaws.com/',
    projectImage: '/greenhouseProjectImage.png',
  },
  {
    key: 3,
    title: 'PitGuru',
    description:
      'A highly customizable racing overlay for racing simulation games.',
    projectImage: '/pitguruProjectImage.png',
  },
];