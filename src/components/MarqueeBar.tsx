import React from 'react';
import Marquee from 'react-fast-marquee';

import { Logo } from './Logo';
import { DataProps } from '@/data/marqueeData';
import { openInNewTab } from '@/utils';

interface Props {
  data: Array<DataProps>;
  direction: 'left' | 'right';
  logoBar: boolean;
}

const MarqueeBar: React.FC<Props> = ({ data, direction, logoBar }) => {
  return (
    <div className={`absolute left-0 w-full `}>
      <Marquee
        pauseOnHover
        direction={direction}
        gradient
        gradientColor={[21, 21, 21]}
        className='overflow-hidden'
      >
        <div className='flex items-center justify-center'>
          {data.map((item) => {
            return (
              <div
                key={item.key}
                className={`px-14 clickable ${
                  logoBar ? 'cursor-pointer' : 'cursor-default'
                }`}
                onClick={logoBar ? openInNewTab(item.link) : undefined}
              >
                {logoBar ? <Logo type={item.value} /> : <p>{item.value}</p>}
              </div>
            );
          })}
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeBar;
