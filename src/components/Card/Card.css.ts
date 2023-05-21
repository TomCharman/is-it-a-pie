import { globalStyle, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { theme } from 'styles/globalTheme.css';

const flip = style({
  width: '100%',
  height: '224px',
  marginBottom: '24px',
  perspective: '1000px',
});

const flipInner = recipe({
  base: {
    position: 'relative',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    transition: 'transform 0.8s',
    transformStyle: 'preserve-3d',
  },
  variants: {
    revealed: {
      true: {
        transform: 'rotateY(180deg)',
      },
    },
  },
  defaultVariants: {
    revealed: false,
  },
});

const cardBase = style({
  position: 'absolute',
  width: '100%',
  height: '100%',
  WebkitBackfaceVisibility: 'hidden',
  backfaceVisibility: 'hidden',

  fontWeight: 600,
  fontSize: '30px',
  color: 'white',
  textShadow: '0 0 3px black',
  padding: '6px',
});

globalStyle(`${cardBase} p`, {
  margin: 0,
});

const card = style([
  cardBase,
  {
    backgroundColor: theme.color.background,
    cursor: 'pointer',
    backgroundSize: 'cover',
    border: 'none',
    display: 'block',
  },
]);

const cardBack = recipe({
  base: [cardBase, {
    transform: 'rotateY(180deg)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }],
  variants: {
    isIt: {
      true: {
        backgroundColor: 'green',
      },
      false: {
        backgroundColor: 'red',
      },
    },
  },
});

export const styles = {
  flip,
  flipInner,
  card,
  cardBack,
};
