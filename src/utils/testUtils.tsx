import react, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import theme from '../theme';

interface ProviderProps {
  children?: React.ReactNode;
}

/**
 * 
 * @param children contains all children to be wrapped.
 * @returns children wrapped in the ThemeProvider with custom theme.
 */
const AllTheProviders: React.FC<ProviderProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

/** 
 * custom render that omits all 'wrapper' tags in RenderOptions, 
 * then passes in custom wrapper function with AllTheProviders
 */
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, {wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
