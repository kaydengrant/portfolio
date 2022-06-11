import React, { useState } from 'react';
import { useSprings, animated } from 'react-spring'

import { MainContainer } from './styles';
import Panel from '../../Panels';

const PANEL_DATA = [
  {
    title: 'adsadfa',
    body: 'Ref telling me to type so now i have to keep typing, my fingers hurt from climbing today keep going - keiran'
  },
  {
    title: 'adsadfa',
    body: 'Keiran roasted me for not using alt liek where is that on mac? i got options!'
  }
]

const AboutSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const springs = useSprings(
    
  )

  return (
    <MainContainer>
      {PANEL_DATA.map((item, i) => {
        return (
          <Panel 
            title={item.title}
            body={item.body}
            isActive={activeIndex === i}
            onClick={() => setActiveIndex((activeIndex) => activeIndex === i ? -1 : i)}
          />
        )
      })}
    </MainContainer>
  )
}

export default AboutSlider;
