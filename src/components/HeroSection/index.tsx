import React from 'react';

import { MainContainer, Text, Buttons, LinkedinIcon } from './styles';
import IconButton from '../Buttons/IconButton';
import Hand from '../../../public/hand.svg';
import Github from '../../../public/github.svg';
import Linkedin from '../../../public/linkedin.svg';
import Discord from '../../../public/discord.svg';

const HeroSection: React.FC = () => {

  const openInNewTab = (url: string): void => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) {
      newWindow.opener = null;
    }
  }

  const onClickUrl = (url: string): (() => void) => () => openInNewTab(url);

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
          <IconButton image={Github} onClick={onClickUrl('https://github.com/kaydengrant')}/>
          <LinkedinIcon image={Linkedin} onClick={onClickUrl('https://www.linkedin.com/in/kaydengrant/')}/>
          <IconButton image={Discord} onClick={onClickUrl('https://discordapp.com/users/842486886302744597')}/>
        </Buttons>
      </Text>
      <Hand/>
    </MainContainer>
  )
}

export default HeroSection;