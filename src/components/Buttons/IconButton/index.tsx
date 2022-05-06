import React from 'react';

import { ButtonContainer, Icon } from './styles';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  image?: React.FC<React.SVGProps<SVGElement>>
}

const IconButton: React.FC<Props> = ({ image, ...props }) => {
  return (
    <ButtonContainer {...props}>
      <Icon as={image}/>
    </ButtonContainer>
  )
}

export default IconButton;
