import styled from 'styled-components';

export const ButtonContainer = styled.button`
  ${({theme}) => theme.text.button};
  margin: ${({theme}) => theme.spacing.extraSmall}px;
  padding: ${({theme}) => theme.spacing.small}px;
  color: ${({theme}) => theme.off};
  background-color: ${({theme}) => theme.lightBrown};
  border-radius: ${({theme}) => theme.radius.small}px;
  cursor: pointer;
  border: none;
  transition: transform .2s;
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.35);
  &:hover {
    transform: scale(1.1); 
    background-color: ${({theme}) => theme.off};
    color: ${({theme}) => theme.bg};
  }
  &:hover:active {
    transform: scale(1.1) translateY(4px);
    filter: brightness(1.2);
  }
`
