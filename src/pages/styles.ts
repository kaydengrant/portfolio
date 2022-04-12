import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  display: flex;
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0px;
  `
  
  export const MainContainer = styled.div`
  display: flex;
  width: 100vw;
  align-items: flex-start;
  background-color: ${({theme}) => theme.colors.black};
`

export const Title = styled.text`
  ${({theme}) => theme.text.h1};
`
