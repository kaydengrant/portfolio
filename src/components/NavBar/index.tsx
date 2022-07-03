import React from 'react';

import { MainContainer, NamedContainer,  } from './styles';
import IconButton from '../Buttons/IconButton';
import GeneralButton from '../Buttons/GeneralButton';
import Sun from '../../../public/sun.svg';
import Moon from '../../../public/moonset.svg';

interface Props {
  theme: string,
  themeToggler: () => void
}

const NavBar: React.FC<Props> = ({ theme, themeToggler }) => {

  return (
    <MainContainer>
      <NamedContainer>
        <GeneralButton title={'about.'}/>
        <GeneralButton title={'projects.'}/>
        <GeneralButton title={'contact.'}/>
      </NamedContainer>
      <IconButton image={theme === 'light' ? Sun : Moon } onClick={themeToggler}/>
    </MainContainer>
  )
}

export default NavBar;
