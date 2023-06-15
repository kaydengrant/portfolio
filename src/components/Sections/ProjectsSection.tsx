import React from 'react';
import { useInView, useSpring, animated } from '@react-spring/web';

import ProjectCard from '../ProjectCard';
import { projectData } from '@/data/projectData';

const ProjectsSection: React.FC = () => {
  const [projectsRef, inView] = useInView({
    once: true,
  });

  const showSectionAnim = useSpring({
    opacity: inView ? 1 : 0,
  });

  return (
    <>
      <span id='Projects' className='invisible' />
      <animated.section
        id='Projects'
        ref={projectsRef}
        style={showSectionAnim}
        className='flex flex-col mt-[22rem] mb-24'
      >
        <h2 className='flex justify-center md:justify-start'>Projects</h2>
        {projectData.map((item, i) => {
          return (
            <ProjectCard
              key={item.key}
              title={item.title}
              description={item.description}
              repoLink={item.repoLink}
              demoLink={item.demoLink}
              projectImage={item.projectImage}
              direction={i % 2}
            />
          );
        })}
      </animated.section>
    </>
  );
};

export default ProjectsSection;
