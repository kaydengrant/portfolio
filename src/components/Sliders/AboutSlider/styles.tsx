import styled from 'styled-components';
import { animated } from 'react-spring';

interface PanelProps {
  isActive: boolean;
  index: number;
}

export const MainContainer = styled.div`
  display: flex;
`

export const PanelContainer = styled(animated.button)<PanelProps>`
  display: flex;
  flex-direction: ${({isActive}) => !isActive ? 'row' : 'column'};
  justify-content: ${({isActive}) => !isActive ? 'center' : 'flex-start'};
  align-items: center;
  cursor: pointer;
  border-radius: ${({theme}) => theme.radius.small}px;
  border: none;
  height: 400px;
  margin: 2px;
  background-color: ${({index, theme}) => index % 2 != 0 ? theme.darkBrown : theme.lightBrown};
  overflow: hidden;
  &:hover {
    filter: ${({isActive}) => !isActive ? 'brightness(1.2)' : 'brightness(1)'};
  }
  h2 {
    margin: 0;
    padding: ${({theme}) => theme.spacing.medium}px;
    color: ${({theme}) => theme.off};
    transform: rotate(${({isActive}) => !isActive ? 270 : 0}deg);
    text-decoration: ${({isActive}) => !isActive ? 'none' : 'underline'};
  }
  p {
    display: ${({isActive}) => !isActive ? 'none' : 'flex'};
    width: 300px;
    overflow-wrap: break-word;
    text-align: left;
    vertical-align: middle;
    line-height: 200%;
    color: ${({theme}) => theme.off};
  }
`
