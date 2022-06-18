import React, { useState } from 'react';
import { MainContainer, MiniCard, LargeCard } from './styles';

import IconButton from '../../Buttons/IconButton';

const CARD_DATA = [
  {
    title: 'Ergo',
    subtitle: 'Task Application',
    body: 'Ergo is a task application focused on habit forming and stat tracking. Using TypeScript and React Native, this project served as a means to learn and practice Full Stack Development.',
    img: 'https://www.allthebestpetcare.com/wp-content/uploads/2021/10/cbd-oil-cat-anxiety.jpg'
  },
  {
    title: 'Ergo2',
    subtitle: 'Task Application2',
    body: 'Using TypeScript and React Native, this project served as a means to learn and practice Full Stack Development.',
    img: 'https://alleycatsandangels.org/wp-content/uploads/2019/07/big-gray-tabby-tire.jpg'
  },
  {
    title: 'aoisnfanf',
    subtitle: 'Task Application2',
    body: 'Fail fond pretty parties decisively keeps wholly branch but calling not garden bachelor whether ready. Made received add husbands make smart open point honoured kept other pretended part laughter.',
    img: 'https://alleycatsandangels.org/wp-content/uploads/2019/07/big-gray-tabby-tire.jpg'
  },
  {
    title: 'the third',
    subtitle: 'Task Application2',
    body: 'Charm enjoy horrible. Welcomed engrossed earnestly. Worthy fine consisted noisier must insipidity performed few arise points however hand exposed confined sportsman tall extensive. Breeding sincerity other shortly. Call steepest when appetite express set.',
    img: 'https://alleycatsandangels.org/wp-content/uploads/2019/07/big-gray-tabby-tire.jpg'
  },
  {
    title: '04',
    subtitle: 'Task Application2',
    body: 'Death provided affection. Unwilling can far sooner cousin advanced really learning insipidity stimulated. Cease cannot numerous breakfast avoid comfort forty  regular seeing call conviction green ladies pretty come continual. Without park well. Wooded bed disposal summer was greatly.',
    img: 'https://alleycatsandangels.org/wp-content/uploads/2019/07/big-gray-tabby-tire.jpg'
  }
]

const ProjectCards: React.FC = () => {

  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <>
    <MainContainer>
      {CARD_DATA.map((item, i) => {
        return(
          <MiniCard
            image={CARD_DATA[i].img}
            onClick={() => setActiveIndex(i)}
          >
            <h2>
              {CARD_DATA[i].title}
            </h2>
            <h3>
              {CARD_DATA[i].subtitle}
            </h3>
          </MiniCard>
        )
      })}
      { activeIndex != -1 ? 
        <LargeCard>
          <IconButton
            onClick={() => setActiveIndex(-1)}
            style={{ position: 'absolute', margin: '5px', right: '0', zIndex: '100'}}
          />
          <img src={CARD_DATA[activeIndex].img} style={{margin: '2px', width: '50%', height: '50%'}}/>
          <h2>
            {CARD_DATA[activeIndex].title + ' - ' + CARD_DATA[activeIndex].subtitle}
          </h2>
          <h4>
            {CARD_DATA[activeIndex].body}
          </h4>
        </LargeCard> : null
      }
    </MainContainer>
    </>
  )
}

export default ProjectCards;