import React from 'react';

interface Props {
  text: string;
  Tag: React.ElementType;
}

const OutlineButton: React.FC<Props> = ({ text, Tag }) => {
  return (
    <button className='group px-3 py-2 border-2 border-white rounded-lg hover:border-green'>
      <Tag className='group-hover:text-green'>{text}</Tag>
    </button>
  );
};

export default OutlineButton;
