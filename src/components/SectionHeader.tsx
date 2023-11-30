import React from 'react';

type Props = {
  title: string;
};

const SectionHeader: React.FC<Props> = ({ title }) => {
  return (
    <div className='flex flex-col self-center'>
      <h2>{title}</h2>
      <div className='bg-darkGreen dark:bg-green h-0.5' />
    </div>
  );
};

export default SectionHeader;
