import React from 'react';

interface Props {
  text: string;
  Tag: React.ElementType;
  icon?: any;
}

const OutlineButton: React.FC<Props> = ({ text, Tag, icon }) => {
  return (
    <button className='flex flex-row group px-3 py-2 border-2 border-white rounded-lg hover:border-lightGreen items-center'>
      <Tag className='group-hover:text-lightGreen'>{text}</Tag>
      {icon && <span className='ml-6'>{React.createElement(icon)}</span>}
    </button>
  );
};

export default OutlineButton;
