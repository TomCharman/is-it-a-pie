import { createGlobalTheme, globalStyle } from '@vanilla-extract/css';

export const theme = createGlobalTheme(':root', {
  color: {
    primary: 'purple',
    background: 'rgb(151, 122, 151)',
  },
  font: {
    heading: "'Luckiest Guy', sans-serif",
    body: "'Merriweather Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  },
  layout: {
    gridGutterWidth: '1.5rem',
  },
});

globalStyle('body', {
  fontFamily: `${theme.font.body} !important`,
  margin: '20px 30px !important',
});
