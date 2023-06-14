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
    key: 1,
    title: 'Greenhouse Global Status',
    description:
      'A website for understanding global trends in regards to climate change using a heat-map of the world.',
    repoLink: 'https://github.com/Greenhouse-Effect/greenhouse-global-status',
    demoLink:
      'http://greenhouse-global-status.s3-website-us-west-2.amazonaws.com/',
    projectImage: '/greenhouseProjectImage.png',
  },
  {
    key: 2,
    title: 'Érgo Habit',
    description:
      'A mobile application for forming habits with analytics, achievements, and more.',
    repoLink: 'https://github.com/Ergo-Tasks/ergo-api',
    projectImage: '/ergoProjectImage.png',
  },
  {
    key: 3,
    title: 'PitGuru',
    description: 'A racing overlay for racing simulation games.',
    projectImage: '/pitguruProjectImage.png',
  },
];
