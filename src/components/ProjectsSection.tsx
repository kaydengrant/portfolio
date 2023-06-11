import React from 'react';

import ProjectCard from './ProjectCard';
import { projectData } from '@/data/projectData';
import { DataProps } from '@/data/projectData';

interface Props {
  data: Array<DataProps>;
}

const ProjectsSection = () => {
  return (
    <section className='flex flex-col'>
      <h2 className='mb-16'>Projects</h2>
      {projectData.map((item, i) => {
        return (
          <ProjectCard
            key={item.key}
            category={item.category}
            title={item.title}
            description={item.description}
            repoLink={item.repoLink}
            demoLink={item.demoLink}
            projectImage={item.projectImage}
            direction={i % 2}
          />
        );
      })}
    </section>
  );
};
// category: string;
//   title: string;
//   description: string;
//   repoLink?: string;
//   demoLink?: string;
//   projectImage: any;

export default ProjectsSection;