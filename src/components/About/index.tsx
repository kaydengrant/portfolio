import React from 'react';

import { Title, MainContainer } from './styles';
import AboutSlider from '../Sliders/AboutSlider';

const About: React.FC = () => {
  return (
    <>
    <Title>
      about.
    </Title>
    <MainContainer>
      <AboutSlider/>
      <h1>
        blurb about using react and react native components and how much better they make things. Lalalalala just trying to fill up space so that I look smarter than you.
      </h1>
    </MainContainer>
    </>
  )
}

export default About;
