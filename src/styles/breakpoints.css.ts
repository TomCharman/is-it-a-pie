import { style, StyleRule } from '@vanilla-extract/css';

type Breakpoint = 'sm' | 'md' | 'lg' | 'xl'
type Direction = 'up' | 'down'

const breakpointSizes: Record<Breakpoint, string> = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
};

const makeBreakpointMediaQuery = (breakpoint: Breakpoint, direction: Direction) => `screen and (${direction === 'down' ? 'max-width' : 'min-width'}: ${breakpointSizes[breakpoint]})`;

const makeBreakpointStyle = (
  breakpoint: Breakpoint,
  direction: Direction,
) => (inputStyle: StyleRule) => style({
  '@media': {
    [makeBreakpointMediaQuery(breakpoint, direction)]: inputStyle,
  },
});

export const breakpoints = {
  sm: {
    up: makeBreakpointStyle('sm', 'up'),
    down: makeBreakpointStyle('sm', 'down'),
  },
  md: {
    up: makeBreakpointStyle('md', 'up'),
    down: makeBreakpointStyle('md', 'down'),
  },
  lg: {
    up: makeBreakpointStyle('lg', 'up'),
    down: makeBreakpointStyle('lg', 'down'),
  },
  xl: {
    up: makeBreakpointStyle('xl', 'up'),
    down: makeBreakpointStyle('xl', 'down'),
  },
};
