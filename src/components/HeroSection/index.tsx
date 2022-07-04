import React from 'react';

import { MainContainer, Text, Buttons, LinkedinIcon } from './styles';
import IconButton from '../Buttons/IconButton';
import Hand from '../../../public/hand.svg';

import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';
import { FaDiscord } from 'react-icons/fa'

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
        <h2>full-stack developer</h2>
        <h1>{'< kayden grant />'}</h1>
        <Buttons>
          <IconButton image={IoLogoGithub} onClick={onClickUrl('https://github.com/kaydengrant')}/>
          <LinkedinIcon image={IoLogoLinkedin} onClick={onClickUrl('https://www.linkedin.com/in/kaydengrant/')}/>
          <IconButton image={FaDiscord} onClick={onClickUrl('https://discordapp.com/users/842486886302744597')}/>
        </Buttons>
      </Text>
      <Hand/>
    </MainContainer>
  )
}

export default HeroSection;