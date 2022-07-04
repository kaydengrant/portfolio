import styled from 'styled-components';

export const Wrapper = styled.div`
`

export const Title = styled.div`
  display: flex;
  justify-content: center;
  ${({theme}) => theme.text.h2};
  margin-bottom: ${({theme}) => theme.spacing.large}px;
  color: ${({theme}) => theme.lightBrown};
`

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  h3 {
    ${({theme}) => theme.text.h3};
    margin: ${({theme}) => theme.spacing.extraSmall}px 0;
    color: ${({theme}) => theme.lightBrown};
    overflow-wrap: break-word;
    align-self: center;
    text-align: left;
    width: 20%;
  }
`
