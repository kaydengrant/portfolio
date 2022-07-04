import styled from 'styled-components';

import IconButton from '../../Buttons/IconButton';

interface CardProps {
  image: string
}

export const Wrapper = styled.div`

`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    ${({theme}) => theme.text.h2};
    margin: ${({theme}) => theme.spacing.large}px 0 0 0;
    color: ${({theme}) => theme.lightBrown};
  }
  h3 {
    ${({theme}) => theme.text.h3};
    color: ${({theme}) => theme.lightBrown};
    overflow-wrap: break-word;
    align-self: center;
    text-align: center;
    width: 30%;
  }
`

export const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
`

export const MiniCard = styled.button<CardProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 20px 2%;
  width: calc(100% * (1/4));
  height: 300px;
  border: none;
  cursor: pointer;
  border-radius: ${({theme}) => theme.radius.small}px;
  transition: transform .2s;
  &:hover {
    transform: scale(1.1); 
    filter: brightness(1.2);
  }
  &:hover:active {
    transform: scale(1.1) translateY(4px);
  }
  div {
    background-image: url(${({image}) => image});
    height: 100%;
    width: 100%;
  }
  h2 {
    ${({theme}) => theme.text.h2}
    color: ${({theme}) => theme.off};
    margin: ${({theme}) => theme.spacing.small}px;
    filter: blur(-5px);
  }
  h3 {
    ${({theme}) => theme.text.h3}
    color: ${({theme}) => theme.off};
    margin: ${({theme}) => theme.spacing.small}px;
  }
`

export const LargeCard = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: ${({theme}) => theme.spacing.small}px;
  z-index: 1000;
  top: 25%;
  width: 25%;
  height: 500px;
  padding: ${({theme}) => theme.spacing.medium}px;
  background-color: ${({theme}) => theme.darkBrown};
  h2 {
    ${({theme}) => theme.text.h2}
    color: ${({theme}) => theme.off};
  }
  h3 {
    ${({theme}) => theme.text.h3}
    color: ${({theme}) => theme.off};
    margin: 0;
  }
  p {
    ${({theme}) => theme.text.p}
    color: ${({theme}) => theme.off};
    overflow-wrap: break-word;
    text-align: left;
    vertical-align: middle;
    line-height: 200%;
  }
`

export const NavButtonContainer = styled.div`
  display: flex;
  position: absolute;
  justify-content: space-between;
  align-items: center;
  vertical-align: baseline;
  width: 100%;
  height: 100%;
`

export const NavButton = styled(IconButton)`
  margin: 0 -25px;
`
