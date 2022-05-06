import react, { ReactElement, useState } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { lightTheme, darkTheme } from '../theme';

interface ProviderProps {
  children?: React.ReactNode;
}

/**
 * 
 * @param children contains all children to be wrapped.
 * @returns children wrapped in the ThemeProvider with custom theme.
 */
const AllTheProviders: React.FC<ProviderProps> = ({ children }) => {
  
  const [theme, setTheme] = useState('dark');

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme }>
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
