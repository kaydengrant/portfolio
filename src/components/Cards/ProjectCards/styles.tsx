import styled from 'styled-components';

interface CardProps {
  image: string
}

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
  margin: 20px 0 0 2%;
  background-image: url(${({image}) => image});
  width: calc(100% * (1/4) - 10px - 1px);
  height: 300px;
  border: none;
  cursor: pointer;
  border-radius: ${({theme}) => theme.radius.small}px;
  filter: brightness(.8);
  transition: transform .2s;
  &:hover {
    transform: scale(1.1); 
    filter: brightness(1.2);
  }
  &:hover:active {
    transform: scale(1.1) translateY(4px);
  }
  h2 {
    ${({theme}) => theme.h2}
    color: ${({theme}) => theme.off};
    margin: 0;
  }
  h3 {
    ${({theme}) => theme.h3}
    color: ${({theme}) => theme.off};
  }
`

export const LargeCard = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
  height: 500px;
  background-color: green;
  h2 {
    ${({theme}) => theme.h2}
    color: ${({theme}) => theme.off};
  }
  h3 {
    ${({theme}) => theme.h3}
    color: ${({theme}) => theme.off};
    margin: 0;
  }
  h4 {
    ${({theme}) => theme.h4}
    color: ${({theme}) => theme.off};
  }
`
