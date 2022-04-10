import styled from 'styled-components';
import { dark } from '../theme';

export const MainContainer = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  display: flex;
  height: 100%;
  width: 100%;
  margin: 0px;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => dark.darkTheme.black}
  `;

export const Title = styled.text`
  ${({theme}) => dark.darkText.h1};
`