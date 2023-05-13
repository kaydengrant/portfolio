import React from 'react';
import Image from 'next/image';
import { useSpring, animated, easings } from '@react-spring/web';

const Profile = () => {
  const blob = useSpring({
    from: {
      borderRadius: '42% 56% 73% 30%/42% 42% 55% 68%',
      transform: 'rotate(0deg)',
    },
    to: {
      borderRadius: '40% 83% 75% 55%/70% 67% 60% 38%',
      transform: 'rotate(20deg)',
    },
    loop: { reverse: true },
    config: {
      mass: 15,
      friction: 10,
      tension: 200,
      duration: 2500,
      easing: easings.easeInOutCirc,
    },
  });

  const antiAnim = useSpring({
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(-20deg)' },
    loop: { reverse: true },
    config: {
      mass: 15,
      friction: 10,
      tension: 200,
      duration: 2500,
      easing: easings.easeInOutCirc,
    },
  });

  return (
    <animated.div
      className='bg-gradient-to-br from-green to-lightGreen overflow-hidden min-w-[300px] border-2 border-white'
      style={blob}
    >
      <animated.div style={antiAnim}>
        <Image
          src='/profile_nobg.png'
          width={300}
          height={300}
          quality={100}
          alt='Picture of the author'
        />
      </animated.div>
    </animated.div>
  );
};

export default Profile;
