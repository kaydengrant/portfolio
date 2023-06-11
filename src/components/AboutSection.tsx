import React from 'react';

import ShuffleEmoticon from './ShuffleEmoticon';

const AboutSection = () => {
  return (
    <section className='flex flex-col-reverse items-center md:flex-row md:justify-around'>
      <div className='flex flex-col items-center justify-center max-w-[80%] md:max-w-[50%] mt-14 md:mt-0'>
        <h2 className='text-gradient mb-5'>About me</h2>
        <p>
          {`Hello, my name is Kayden. I'm a passionate Software Engineer who is *something about web3*. 
          I like to solve real-world problems by developing creative solutions centered around user needs.
          I also enjoy working in diverse teams as I find they produce the best and most
          innovative ideas.`}
        </p>
        <p className='mt-3'>
          {`In my freetime I'm likely playing my guitar or working on personal
          programming projects.`}
        </p>
      </div>
      <ShuffleEmoticon />
    </section>
  );
};

export default AboutSection;
