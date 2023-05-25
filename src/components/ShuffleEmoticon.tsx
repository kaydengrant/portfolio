import React, { useEffect, useState } from 'react';
import { animated, useSpring } from '@react-spring/web';
import Image from 'next/image';

import Hand from '/public/hand.svg';
import Coffee from '/public/coffee.svg';
import Computer from '/public/computer.svg';
import Cog from '/public/cog.svg';

interface DataProps {
  key: number;
  icon: any;
  anim: any;
}

const ShuffleEmoticon = () => {
  const [index, setIndex] = useState(0);

  const handleIndex = () => {
    if (index >= 2) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const handAnim = useSpring({
    from: { transform: 'rotate(-70deg)' },
    to: { transform: 'rotate(30deg)' },
    loop: { reverse: true },
    config: {
      mass: 1,
      tension: 20,
      friction: 10,
    },
  });

  const coffeeAnim = useSpring({
    from: { x: 0 },
    to: {
      x: 10,
      range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
      output: [180, 220, 180, 220, 180, 220, 180, 220],
    },
    loop: true,
    delay: 500,
    config: {
      mass: 1,
      tension: 500,
      friction: 10,
    },
  });

  const cogAnim = useSpring({
    from: { transform: 'rotate(0deg)', y: -34 },
    to: { transform: 'rotate(360deg)', y: -34 },
    loop: true,
    config: {
      mass: 10,
      tension: 75,
      friction: 25,
    },
  });

  const emoticonData: Array<DataProps> = [
    { key: 0, icon: Hand, anim: handAnim },
    { key: 1, icon: Coffee, anim: coffeeAnim },
    { key: 2, icon: Cog, anim: cogAnim },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      handleIndex();
    }, 8000);
    return () => clearInterval(interval);
  });

  return (
    <div className='flex justify-center items-center'>
      {emoticonData.slice(index, index + 1).map((item) => {
        return (
          <>
            <div key={item.key} onClick={handleIndex}>
              {index == 2 ? (
                <div className='flex justify-center'>
                  <Image src={Computer} alt='' className='absolute' />
                </div>
              ) : undefined}
              <animated.div style={item.anim}>
                <Image src={item.icon} alt='' />
              </animated.div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default ShuffleEmoticon;
