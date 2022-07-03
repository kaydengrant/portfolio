import React from 'react';
import { IconType } from 'react-icons';
import { CSSProperties } from 'styled-components';

import { ButtonContainer, Icon } from './styles';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  image?: IconType,
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
