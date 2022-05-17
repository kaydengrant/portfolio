import styled from 'styled-components';

export const MainContainer = styled.div`
  h1 {
    margin: ${({theme}) => theme.spacing.extraSmall}px 0;
    ${({theme}) => theme.h1};
    color: ${({theme}) => theme.lightBrown};
  }
`
