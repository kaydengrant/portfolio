import React, { useState, useContext } from 'react';
import { ThemeContext} from 'styled-components';

import { MainContainer } from './styles';
import Panel from '../../Panels';

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

const AboutSlider: React.FC = () => {

  const themeContext = useContext(ThemeContext);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <MainContainer>
      {PANEL_DATA.map((item, i) => {
        return (
          <Panel
            title={item.title}
            body={item.body}
            isActive={activeIndex === i}
            style={i % 2 != 0 ? {backgroundColor: themeContext.darkBrown} : {}}
            onClick={() => setActiveIndex((activeIndex) => activeIndex === i ? -1 : i)}
          />
        )
      })}
    </MainContainer>
  )
}

export default AboutSlider;
