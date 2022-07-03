import styled from "styled-components";
import IconButton from "../Buttons/IconButton";

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    ${({theme}) => theme.text.h1};
    margin: ${({theme}) => theme.spacing.extraSmall}px 0;
    color: ${({theme}) => theme.lightBrown}
  }
  h3 {
    ${({theme}) => theme.text.h3};
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
