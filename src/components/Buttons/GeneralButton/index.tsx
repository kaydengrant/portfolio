import React from 'react';
import { CSSProperties } from 'styled-components';

import { ButtonContainer } from './styles';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string,
  style?: CSSProperties
}

const GeneralButton: React.FC<Props> = ({ title, ...props }) => {
  
  return (
    <ButtonContainer {...props}>
      <h3>{title}</h3>
    </ButtonContainer>
  )
}

export default GeneralButton;
