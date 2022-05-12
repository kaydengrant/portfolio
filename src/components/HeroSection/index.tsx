import React from 'react';

import { MainContainer, Text, Buttons, LinkedinIcon } from './styles';
import IconButton from '../Buttons/IconButton';
import Hand from '../../../public/hand.svg';
import Github from '../../../public/github.svg';
import Linkedin from '../../../public/linkedin.svg';
import Discord from '../../../public/discord.svg';

const HeroSection: React.FC = () => {
  return (
    <MainContainer>
      <Text>
        <h3>
          {'full stack developer'}
        </h3>
        <h1>
          {'< kayden grant />'}
        </h1>
        <Buttons>
          <IconButton image={Github}/>
          <LinkedinIcon image={Linkedin}/>
          <IconButton image={Discord}/>
        </Buttons>
      </Text>
      <Hand/>
    </MainContainer>
  )
}

export default HeroSection;