import React, { useState } from 'react';
import { CSSProperties } from 'styled-components';

import { MainContainer, PanelContainer } from './styles';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  title: string,
  body: string,
  isActive: boolean,
  style?: CSSProperties
}

const Panel: React.FC<Props> = ({title, body, isActive, style, ...props}) => {
  return (
    <MainContainer {...props} style={style}>
      <PanelContainer isActive={isActive} style={style}>
        <h2>
          {title}
        </h2>
        <h3>
          {body}
        </h3>
      </PanelContainer>
    </MainContainer>
  )
}

export default Panel;
