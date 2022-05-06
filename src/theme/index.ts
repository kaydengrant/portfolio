import { lightColors, darkColors} from './colors';
import radius from './radius';
import sizes from './sizes';
import spacing from './spacing';
import { lightText, darkText} from './text';

export const lightTheme =  {
  /**Colors */
  /**Bg */
  bg: '#DCC9B6',
  /**Bg contrast */
  off: '#3F403F',
  /** Main */
  lightBrown: '#907C5C',
  /** Main accent */
  darkBrown: '#6c584c',
  radius,
  sizes,
  spacing,
  /**Text */
  button:`
    color: ${lightColors.bg};
    font-size: 18px;
    font-weight: 600;
  `,
  h1:`
    color: ${lightColors.lightBrown};
    font-size: 32px;
    font-weight: 600;
  `,
  h2:`
    color: ${lightColors.bg};
    font-size: 24px;
    font-weight: 600;
  `,
  p:`
    color: ${lightColors.lightBrown};
    font-size: 15px;
    font-weight: 600;
  `
}

export const darkTheme =  {
  /**Bg */
  bg: '#3E363F',
  /**Bg contrast */
  off: '#DCC9B6',
  /** Main */
  lightBrown: '#907C5C',
  /** Main accent */
  darkBrown: '#6c584c',
  radius,
  sizes,
  spacing,
  /**Text */
  button:`
    color: ${darkColors.bg};
    font-size: 18px;
    font-weight: 600;
  `,
  h1:`
    color: ${darkColors.lightBrown};
    font-size: 32px;
    font-weight: 600;
  `,
  h2:`
    color: ${darkColors.bg };
    font-size: 24px;
    font-weight: 600;
  `,
  p:`
    color: ${darkColors.lightBrown};
    font-size: 15px;
    font-weight: 600;
  `
}