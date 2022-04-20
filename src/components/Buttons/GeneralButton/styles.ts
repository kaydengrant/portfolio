import styled from 'styled-components';

export const ButtonContainer = styled.button`
  align-items: center;
  background-color: ${({theme}) => theme.colors.lightBrown};
  border-radius: ${({theme}) => theme.radius.small}px;
  border: none;
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.35);
  transition: transform .2s;
  &:hover {
    transform: scale(1.1); 
  }
  &:hover:active {
    transform: scale(1.1) translateY(4px);
    opacity: .75;
  }
  `
  
export const Title = styled.h2`
  ${({theme}) => theme.text.button};
  font-size: 32px;
  margin: 0;
  padding: ${({theme}) => theme.spacing.small}px;
`
