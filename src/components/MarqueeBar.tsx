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
    <div className='my-5 py-12'>
      <div className='absolute left-0 w-full '>
        <Marquee
          autoFill={true}
          pauseOnHover={true}
          direction={direction}
          speed={40}
          className='flex items-center justify-center overflow-hidden'
        >
          {data.map((item) => {
            return (
              <div
                key={item.key}
                className={`px-10 clickable ${
                  logoBar ? 'cursor-pointer' : 'cursor-default'
                }`}
                onClick={logoBar ? openInNewTab(item.link) : undefined}
              >
                {logoBar ? <Logo type={item.value} /> : <p>{item.value}</p>}
              </div>
            );
          })}
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeBar;
