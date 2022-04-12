import styled from 'styled-components';

export const ButtonContainer = styled.button`
  background-color: ${({theme}) => theme.colors.lightBrown};
  border-radius: ${({theme}) => theme.radius.small}px;
  border: 2px none;
  padding: ${({theme}) => theme.spacing.small}px;
  box-shadow: 3px 3px 3px black;
  ;
`

export const Title = styled.text`
  ${({theme}) => theme.text.p};
  color: ${({theme}) => theme.colors.black};
`