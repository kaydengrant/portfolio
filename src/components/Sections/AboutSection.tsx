import React from 'react';

import ShuffleEmoticon from '../ShuffleEmoticon';

const AboutSection = () => {
  return (
    <section className='flex flex-col-reverse items-center md:flex-row md:justify-around'>
      <div className='flex flex-col items-center justify-center max-w-[80%] md:max-w-[45%] mt-14 md:mt-0'>
        <h2 className='text-gradient mb-5'>About me</h2>
        <p>
          {`Welcome to my portfolio! I'm a dedicated Software Engineer who enjoys tackling real-world challenges  
          through developing creative solutions centered around user needs. I value working in diverse teams as I  
          believe they produce the best and most innovative ideas.`}
        </p>
        <p className='mt-3'>
          {`In my freetime I'm likely hanging out with my cat or working on personal projects.`}
        </p>
      </div>
      <ShuffleEmoticon />
    </section>
  );
};

export default AboutSection;
