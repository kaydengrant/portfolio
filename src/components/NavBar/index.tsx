import React from 'react';
import { IoIosSunny, IoIosMoon } from 'react-icons/io'

import { MainContainer, NamedContainer,  } from './styles';
import IconButton from '../Buttons/IconButton';
import GeneralButton from '../Buttons/GeneralButton';

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
      <IconButton image={theme === 'light' ? IoIosSunny : IoIosMoon } onClick={themeToggler}/>
    </MainContainer>
  )
}

export default NavBar;
