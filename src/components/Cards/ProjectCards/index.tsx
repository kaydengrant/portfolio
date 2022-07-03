import React, { useState } from 'react';
import { MainContainer, MiniCard, LargeCard, NavButtonContainer, NavButton } from './styles';

import IconButton from '../../Buttons/IconButton';
import { IoIosClose, IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { PROJECT_DATA } from './assets';

const ProjectCards: React.FC = () => {

  const [activeIndex, setActiveIndex] = useState(-1);
  const length = PROJECT_DATA.length - 1;

  return (
    <MainContainer>
      {PROJECT_DATA.map((item, i) => (
          <>
          <MiniCard
            image={PROJECT_DATA[i].img}
            onClick={() => setActiveIndex(i)}
          >
            <h2> {PROJECT_DATA[i].title} </h2>
            <h3> {PROJECT_DATA[i].subtitle} </h3>
          </MiniCard>
          {activeIndex === i && 
            <LargeCard>
              <IconButton
                image={IoIosClose}
                onClick={() => setActiveIndex(-1)}
                style={{ position: 'absolute', margin: '5px', top: '0', right: '0', zIndex: '100' }}
              />
              <NavButtonContainer>
                <NavButton
                  image={IoIosArrowBack}
                  onClick={() => setActiveIndex((activeIndex) => activeIndex < length ? activeIndex + 1 : 0)}
                />
                <NavButton
                  image={IoIosArrowForward}
                  onClick={() => setActiveIndex((activeIndex) => activeIndex > 0 ? activeIndex - 1 : length)}
                />
              </NavButtonContainer>
              <img 
                src={PROJECT_DATA[activeIndex].img} 
                style={{ margin: '2px', width: '50%', height: '50%', cursor: 'pointer' }}
              />
              <h2> {PROJECT_DATA[activeIndex].title + ' - ' + PROJECT_DATA[activeIndex].subtitle} </h2>
              <h4> {PROJECT_DATA[activeIndex].body} </h4>
            </LargeCard>
          }
          </>
      ))}
    </MainContainer>
  )
}

export default ProjectCards;