import styled from "styled-components";

import IconButton from "../Buttons/IconButton";

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    ${({theme}) => theme.text.h1};
    margin: ${({theme}) => theme.spacing.small}px 0;
    color: ${({theme}) => theme.lightBrown}
  }
  h2 {
    ${({theme}) => theme.text.h2};
    margin: 0;
    color: ${({theme}) => theme.lightBrown}
  }
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
`

export const LinkedinIcon = styled(IconButton)`
  
`
