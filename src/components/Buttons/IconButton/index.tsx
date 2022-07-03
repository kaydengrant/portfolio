import React from 'react';
import { CSSProperties } from 'styled-components';

import { ButtonContainer, Icon } from './styles';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  image?: React.FC<React.SVGProps<SVGElement>>,
  style?: CSSProperties
}

const IconButton: React.FC<Props> = ({ image, style, ...props }) => {
  return (
    <ButtonContainer {...props} style={style}>
      <Icon as={image}/>
    </ButtonContainer>
  )
}

export default IconButton;
