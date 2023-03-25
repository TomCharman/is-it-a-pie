import { style } from '@vanilla-extract/css';
import { breakpoints } from 'styles/breakpoints.css';
import { theme } from 'styles/globalTheme.css';

const title = style({
  margin: 0,
});

const top = style([
  {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: `0 ${theme.layout.gridGutterWidth} 12px`,
  },
  breakpoints.sm.down({
    flexDirection: 'column',
  }),
]);

const navigation = style({
  textAlign: 'right',
});

const button = style([
  {
    marginLeft: '12px',
  },
  breakpoints.sm.down({
    margin: '10px 0',
  }),
]);

export const styles = {
  top, navigation, button, title,
};
