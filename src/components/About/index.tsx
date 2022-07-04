import React from 'react';

import { Title, MainContainer, Wrapper } from './styles';
import AboutSlider from '../Sliders/AboutSlider';

const About: React.FC = () => {
  return (
    <Wrapper>
      <Title>about.</Title>
      <MainContainer>
        <AboutSlider/>
        <h3>blurb about using react and react native components and how much better they make things. Lalalalala just trying to fill up space so that I look smarter than you.</h3>
      </MainContainer>
    </Wrapper>
  )
}

export default About;
