import styled from 'styled-components';

export const ButtonContainer = styled.button`
  align-items: center;
  background-color: ${({theme}) => theme.darkBrown};
  border-radius: ${({theme}) => theme.radius.small}px;
  border: none;
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.35);
  transition: transform .2s;
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
  ${({theme}) => theme.button};
  color: ${({theme}) => theme.off};
  font-size: 32px;
  margin: 0;
  padding: ${({theme}) => theme.spacing.small}px;
`
