import styled from 'styled-components';

interface PanelProps {
  isActive: boolean;
}

export const MainContainer = styled.button`
  margin: 2px;
  padding: 0;
  border: none;
  border-radius: ${({theme}) => theme.radius.small}px;
  background-color: ${({theme}) => theme.lightBrown};
  cursor: pointer;
`

export const PanelContainer = styled.button<PanelProps>`
  display: flex;
  flex-direction: ${({isActive}) => !isActive ? 'row' : 'column'};
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: ${({theme}) => theme.radius.small}px;
  border: none;
  transition: all .5s;
  width: ${({ isActive }) => !isActive ? 100 : 400}px;
  height: 400px;
  margin: 0 15px;
  background-color: ${({theme}) => theme.lightBrown};
  h2 {
    margin: 0;
    padding: ${({theme}) => theme.spacing.medium}px;
    color: ${({theme}) => theme.off};
    transform: rotate(${({isActive}) => !isActive ? 270 : 0}deg);
  }
  h3 {
    display: ${({isActive}) => !isActive ? 'none' : 'block'};
    overflow-wrap: break-word;
    color: ${({theme}) => theme.off};
  }
`
