import { style } from '@vanilla-extract/css';
import { theme } from 'styles/globalTheme.css';

const base = style({
  fontSize: '76px',
  fontWeight: 400,
  lineHeight: '76px',
  textAlign: 'center',
  fontFamily: theme.font.heading,
  margin: '10px 0',
});

const link = style({
  textDecoration: 'none',
  color: theme.color.primary,
  borderRadius: '10px',
  padding: '23px 20px 0px',
  ':hover': {
    color: 'white',
    backgroundColor: theme.color.primary,
  },
});

export const styles = {
  base,
  link,
};
