import { style } from '@vanilla-extract/css';

const base = style({
  marginTop: '20px',
});

const invite = style({
  textAlign: 'center',
  fontSize: '3.6rem',
  display: 'block',
  padding: '4.8rem',
  color: 'white',
  backgroundColor: 'rgb(151, 122, 151)',
  textShadow: '0 0 3px black',
  textDecoration: 'none',
  borderRadius: '10px',
  marginBottom: '40px',
  position: 'relative',

  '::after': {
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
    opacity: 0,
    transition: 'opacity 0.3s ease-in-out',
    content: '',
    height: '100%',
    width: '100%',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: '10px',
    position: 'absolute',
    zIndex: -1,
  },

  ':hover': {
    color: 'white',
  },

  selectors: {
    '&:hover::after': {
      opacity: 1,
    },
  },
});

export const styles = {
  base, invite,
};
