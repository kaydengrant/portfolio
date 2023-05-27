import React from 'react';

interface Props {
  data: Array<any>;
  direction: 'left' | 'right';
}

const ScrollingBar: React.FC<Props> = () => {
  return (
    <div className='absolute'>
      <div></div>
    </div>
  );
};

export default ScrollingBar;
