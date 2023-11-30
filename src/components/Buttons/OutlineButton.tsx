import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  Tag: any;
  icon?: any;
  iconFirst?: boolean;
}

const OutlineButton: React.FC<Props> = ({
  text,
  Tag,
  icon,
  iconFirst,
  ...props
}) => {
  return (
    <button
      className={`flex ${
        iconFirst ? 'flex-row-reverse' : 'flex-row'
      } justify-center items-center group px-3 py-2 border-2 border-black dark:border-white rounded-lg gap-4 w-full clickable`}
      {...props}
    >
      <Tag className='group-hover:text-darkGreen group-hover:dark:text-green '>
        {text}
      </Tag>
      {icon}
    </button>
  );
};

export default OutlineButton;
