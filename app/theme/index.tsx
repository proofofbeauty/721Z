import { createGlobalStyle } from 'styled-components';
import { darkTheme } from './dark';

export interface ThemeInterface {
  body: string;
  primaryText: string;
  secondaryText: string;
  tertiaryText: string;
  border: string;
  area: string;
  green: string;
  blue: string;
}

export const theme = darkTheme;

export const BREAKPTS = {
  XS: 360,
  SM: 480,
  MD: 768,
  LG: 992,
  XL: 1200,
};

export const ThemedGlobalStyle = createGlobalStyle`
    body, html, * {
        box-sizing: border-box;
        /* font-family: Helvetica, sans-serif, Arial; */
        font-family: 'Roboto Mono', monospace;
    }
    html {
    }
    body {
        min-height: 100vh;
        width: 100%;
        margin: 0;
        background: ${theme.body};
        color: ${theme.primaryText};
    }
`;
