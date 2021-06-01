const screens = {
  mobile: {
    min: 320,
    max: 594,
  },
  tablet: {
    min: 768,
    max: 1112,
  },
  medium: {
    min: 1024,
    max: 1440,
  },
  big: {
    min: 1440,
    max: 1680,
  },
  large: {
    min: 1680,
  },
};

const theme = {
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  space: [0, 4, 8, 16, 24, 32, 36, 48],
  radii: [0, 4],

  mediaQueries: {
    mobile: {
      portrait: `@media screen and (min-width: ${screens.mobile.min}) and (orientation: portrait)`,
      landscape: `@media screen and (min-width: ${screens.mobile.min}) and (orientation: landscape)`,
    },
    tablet: {
      portrait: `@media screen and (min-width: ${screens.tablet.min}) and (orientation: portrait)`,
      landscape: `@media screen and (min-width: ${screens.tablet.min}) and (orientation: landscape)`,
    },
    medium: `@media screen and (min-width: ${screens.medium.min})`,
    big: `@media screen and (min-width: ${screens.big.min})`,
    large: `@media screen and (min-width: ${screens.large.min})`,
  },

  colors: {
    black: '#000',
    white: '#fff',
    doveGray: '#666',
  },
};

export default theme;
