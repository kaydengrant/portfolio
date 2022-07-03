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
      {title}
    </ButtonContainer>
  )
}

export default GeneralButton;
