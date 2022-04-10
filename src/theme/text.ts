import { lightTheme, darkTheme } from "./colors";

export const lightText = {
  h1:`
    color: ${lightTheme.lightBrown};
    font-size: 48px;
    font-weight: 600;
  `,
  h2:`
    color: ${lightTheme.white};
    font-size: 40px;
    font-weight: 600;
  `,
  p:`
    color: ${lightTheme.lightBrown};
    font-size: 24px;
    font-weight: 600;
  `
}

export const darkText = {
  h1:`
    color: ${darkTheme.lightBrown};
    font-size: 48px;
    font-weight: 600;
  `,
  h2:`
    color: ${darkTheme.black};
    font-size: 40px;
    font-weight: 600;
  `,
  p:`
    color: ${darkTheme.lightBrown};
    font-size: 24px;
    font-weight: 600;
  `
}