import React from 'react';

import ProjectCard from '../ProjectCard';
import { projectData } from '@/data/projectData';

const ProjectsSection = () => {
  return (
    <section className='flex flex-col mt-[16rem]'>
      <h2 className='flex mb-16 justify-center md:justify-start'>Projects</h2>
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

export default ProjectsSection;
