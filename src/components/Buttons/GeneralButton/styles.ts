import styled from 'styled-components';

export const ButtonContainer = styled.button`
  height: 50px;
  background-color: ${({theme}) => theme.lightBrown};
  border-radius: ${({theme}) => theme.radius.small}px;
  border: none;
  transition: transform .2s;
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.35);
  &:hover {
    transform: scale(1.1); 
    background-color: ${({theme}) => theme.off};
  }
  &:hover:active {
    transform: scale(1.1) translateY(4px);
    filter: brightness(1.2);
  }
 `
  
export const Title = styled.h2`
  ${({theme}) => theme.text.button};
  color: ${({theme}) => theme.off};
  margin: 0;
  padding: ${({theme}) => theme.spacing.extraSmall}px;
  ${ButtonContainer}:hover & {
    color: ${({theme}) => theme.bg};
  }
`
