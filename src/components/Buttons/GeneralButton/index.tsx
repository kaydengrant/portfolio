import React from 'react';

import { ButtonContainer, Title } from './styles';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string
}

const GeneralButton: React.FC<Props> = ({ title, ...props }) => {
  
  return (
    <ButtonContainer {...props}>
      <Title>
        {title}
      </Title>
    </ButtonContainer>
  )
}

export default GeneralButton;
