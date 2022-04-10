import 'styled-components';

import { light, dark } from './theme';

type StyledTheme = typeof dark;

declare module 'styled-component' {
  export interface DefaultTheme extends StyledTheme {};
}