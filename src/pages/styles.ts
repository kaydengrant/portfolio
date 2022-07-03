import styled, { createGlobalStyle } from 'styled-components';

import { StyledTheme } from '../styled'

export const GlobalStyle = createGlobalStyle<{ theme: StyledTheme }>`
  body {
    margin: 40px 70px;
    padding: 0;
    background: ${({theme}) => theme.bg};
  }
`
  
export const MainContainer = styled.div`
  min-height: 100%;
  min-width: 100%;
  height: 2050px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 0;
  left: 0;
  right: 0;
`

export const Title = styled.text`
  ${({theme}) => theme.text.h1};
`
