import { createGlobalTheme } from '@vanilla-extract/css';

export const theme = createGlobalTheme(':root', {
  color: {
    primary: 'purple',
    background: 'rgb(151, 122, 151)',
  },
  font: {
    heading: "'Luckiest Guy', sans-serif",
    body: '"Merriweather Sans", sans-serif',
  },
});
