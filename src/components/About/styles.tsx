import styled from 'styled-components';

export const Title = styled.div`
  margin: ${({theme}) => theme.spacing.extraSmall}px 0;
  ${({theme}) => theme.h1};
  color: ${({theme}) => theme.lightBrown};
  align-self: center;
`

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-around;
  h1 {
    margin: ${({theme}) => theme.spacing.extraSmall}px 0;
    ${({theme}) => theme.h1};
    color: ${({theme}) => theme.lightBrown};
    overflow-wrap: break-word;
    align-self: center;
    width: 20%;
  }
`
