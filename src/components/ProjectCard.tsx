import React from 'react';
import Image from 'next/image';
import { useInView, useSpring, animated } from '@react-spring/web';

import OutlineButton from './Buttons/OutlineButton';
import { Icon } from './Icon';
import { openInNewTab } from '@/utils';

type Props = {
  title: string;
  description: string;
  repoLink?: string;
  demoLink?: string;
  projectImage: any;
  direction: number;
};

const ProjectCard: React.FC<Props> = ({
  title,
  description,
  repoLink,
  demoLink,
  projectImage,
  direction,
}) => {
  const [projectCardRef, inView] = useInView({
    once: true,
  });

  const slideLeftAnim = useSpring({
    opacity: inView ? 1 : 0,
    x: inView ? '0px' : '-100vw',
    config: {
      friction: 75,
    },
  });

  const slideRightAnim = useSpring({
    opacity: inView ? 1 : 0,
    x: inView ? '0px' : '100vw',
    config: {
      friction: 75,
    },
  });

  return (
    <div ref={projectCardRef}>
      <animated.div
        style={direction == 0 ? slideLeftAnim : slideRightAnim}
        className={`flex flex-col-reverse justify-between items-center my-20 ${
          direction == 0 ? 'md:flex-row' : 'md:flex-row-reverse'
        }`}
      >
        <div
          className={`flex flex-col text-center max-w-[325px] ${
            direction == 0 ? 'md:text-left' : 'md:text-right'
          }`}
        >
          <h3 className='text-gradient mb-10'>{title}</h3>
          <p>{description}</p>
          <div className='w-full h-0.5 bg-white my-5' />
          <div
            className={`flex flex-row justify-evenly md:${
              repoLink && demoLink
                ? 'justify-evenly'
                : direction == 0
                ? 'justify-start'
                : 'justify-end'
            }`}
          >
            {repoLink && (
              <span onClick={openInNewTab(repoLink)}>
                <OutlineButton text='Code' Tag={'h4'} icon={Icon.GithubSmall} />
              </span>
            )}
            {demoLink && (
              <span onClick={openInNewTab(demoLink)}>
                <OutlineButton text='Demo' Tag={'h4'} icon={Icon.Arrow} />
              </span>
            )}
            {!repoLink && !demoLink && <h4>Releasing soon</h4>}
          </div>
        </div>
        <div className='flex w-[300px] h-[300px] justify-center items-center overflow-hidden shadow-gray shadow-sm rounded-2xl mb-8 md:mb-0'>
          <Image
            src={projectImage}
            alt='Project Image'
            width={300}
            height={300}
            quality={100}
            className='object-cover'
          />
        </div>
      </animated.div>
    </div>
  );
};

export default ProjectCard;
