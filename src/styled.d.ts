import 'styled-components';

import theme from './theme';

export type StyledTheme = typeof theme;

declare module 'styled-component' {
  export interface DefaultTheme extends StyledTheme {};
}