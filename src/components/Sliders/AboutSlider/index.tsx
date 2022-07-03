import React, { useState } from 'react';
import { useSprings } from 'react-spring';

import { MainContainer, PanelContainer } from './styles';

const PANEL_DATA = [
  {
    title: 'kaydengrant.',
    body: 'something about how coding is cool and so am i and how interested i am in working for long periods for low pay.'
  },
  {
    title: 'skills.',
    body: 'blurb about using react and react native components and how much better they make things. Lalalalala just trying to fill up space so that I look smarter than you.'
  },
  {
    title: 'extra.',
    body: 'blurb about using react and react native components and how much better they make things. Lalalalala just trying to fill up space so that I look smarter than you.'
  }
]

const getAnim = (index: number, curr: number) => {
  const isActive = index === curr;
  return({width: isActive ? 400 : 100})
}

const AboutSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [springs, api] = useSprings(PANEL_DATA.length, index => ({
    ...getAnim(index, activeIndex)
  }), [activeIndex]);
  
  return (
    <MainContainer>
      {springs.map(({width}, i) => {
        return (
          <PanelContainer 
            onClick={() => setActiveIndex((activeIndex) => activeIndex === i ? -1 : i)}
            isActive={activeIndex === i}
            index={i}
            style={{width}}
          >
            <h2>{PANEL_DATA[i].title}</h2>
            <p>{PANEL_DATA[i].body}</p>
          </PanelContainer>
        )
      })}
    </MainContainer>
  )
}

export default AboutSlider;
