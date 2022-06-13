import styled from "styled-components";

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({theme}) => theme.spacing.extraSmall}px;
  padding: 0;
  cursor: pointer;
  background-color: ${({theme}) => theme.lightBrown};
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

export const Icon = styled.div`
  width: 40px;
  height: 40px;
  fill: ${({theme}) => theme.off};
  padding: ${({theme}) => theme.spacing.extraSmall}px;
    ${ButtonContainer}:hover & {
    fill: ${({theme}) => theme.bg}
  }
`
