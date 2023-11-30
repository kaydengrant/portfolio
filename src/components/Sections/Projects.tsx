import React from 'react';
import Image from 'next/image';
import { useInView, useSpring, animated } from '@react-spring/web';

import { SectionHeader } from '..';
import { projectData } from '../../data';
import { openInNewTab } from '@/utils';

const Projects: React.FC = () => {
  const [projectsRef, inView] = useInView({
    once: true,
  });

  const showSectionAnim = useSpring({
    opacity: inView ? 1 : 0,
    config: {
      mass: 20,
      friction: 100,
    },
  });

  return (
    <>
      <span id='Projects' className='invisible' />
      <animated.section
        id='Projects'
        ref={projectsRef}
        style={showSectionAnim}
        className='flex flex-col gap-8'
      >
        <SectionHeader title='Projects' />
        <ul className='grid grid-cols-[repeat(auto-fit,minmax(300px,max-content))] justify-center gap-6 '>
          {projectData.map((project, index) => (
            <li key={index}>
              <div
                className='flex flex-col w-[300px] h-[350px] justify-between bg-white dark:bg-darkGray p-4 rounded-lg cursor-pointer transition-all select-none hover:scale-110'
                onClick={openInNewTab(project.link)}
              >
                <div className='flex flex-col gap-4'>
                  <div className='flex flex-row w-full justify-between items-center'>
                    <div className='relative flex w-[75px] h-[75px] justify-center items-center overflow-hidden rounded-md'>
                      <Image
                        src={project.projectImage}
                        alt='Project Image'
                        fill
                        quality={100}
                        className='object-cover'
                      />
                    </div>
                    <p className='self-start'>{project.date}</p>
                  </div>
                  <div>
                    <h3 className='text-darkGreen dark:text-green'>
                      {project.title}
                    </h3>
                    <p>{project.description}</p>
                  </div>
                </div>
                <div className='flex flex-col gap-4 justify-end'>
                  <div className='w-full h-0.5 bg-black dark:bg-white' />
                  <ul className='flex flex-row gap-4'>
                    {project.tools.map((tool: any, index: number) => (
                      <li key={tool.key}>{tool}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </animated.section>
    </>
  );
};

export default Projects;
