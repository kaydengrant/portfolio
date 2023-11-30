import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: any;
  bgColor: string;
  iconColor: string;
}

const IconButton: React.FC<Props> = ({
  icon,
  bgColor,
  iconColor,
  ...props
}) => {
  return (
    <button
      className={`flex justify-center items-center p-2 ${bgColor} ${iconColor} border border-gray rounded-md 
      disable cursor-pointer transition-all select-none hover:scale-110 active:brightness-125`}
      {...props}
    >
      {icon}
    </button>
  );
};

export default IconButton;
