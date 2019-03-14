import { css } from 'glamor'

export const appStyles = css({
  display: 'block',
  maxWidth: '1450px',
  minWidth: '320px',
  padding: '11px',
  margin: '0 auto',
  backgroundColor: 'white',
})

export const gridContainerStyles = css({
  listStyle: 'none',
  display: 'grid',
  padding: '0',
  '> section > div > figure': {
    margin: '0',
    '> img': {
      width: '100%',
      // height: '100%',
      objectFit: 'cover',
    },
  },
})
export const gridBase = css({
  display: 'grid',
  gridGap: '1rem',
  '@media only screen and (max-width: 599px)': {
    /* for-small-phone-only */
    display: 'block',
    '> div:not(:first-child)': {
      marginTop: '2rem',
    },
  },
})
export const firstRowStyles = css(gridBase, {
  '> div:first-child': {
    gridColumn: 'span 2',
  },
  '@media only screen and (min-width: 600px)': {
    /* for-tablet-portrait-up */
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
  },
  '@media only screen and (min-width: 900px)': {
    /* for-tablet-landscape-up */
    gridTemplateColumns: 'repeat(auto-fit, minmax(275px, 1fr))',
  },
  '@media only screen and (min-width: 1023px)': {
    /* for-desktop-up */
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
  },
  '@media only screen and (min-width: 1200px)': {
    /* for-high-res-desktop-up */
    gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
  },
})
export const secondRowStyles = css(gridBase, {
  marginTop: '2rem',
  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
  '@media only screen and (min-width: 774px)': {
    /* for-tablet-portrait-up */
    gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
  },
  '@media only screen and (min-width: 900px)': {
    /* for-tablet-landscape-up */
    gridTemplateColumns: 'repeat(auto-fit, minmax(175px, 1fr))',
  },
  '@media only screen and (min-width: 1023px)': {
    /* for-desktop-up */
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
  },
  '@media only screen and (min-width: 1200px)': {
    /* for-high-res-desktop-up */
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
  },
})

export const thirdRowStyles = css(gridBase, {
  marginTop: '2rem',
  gridTemplateColumns: 'repeat(auto-fit, minmax(175px, 1fr))',
  '@media only screen and (max-width: 599px)': {
    /* for-small-phone-only */
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    '> div:not(:first-child)': {
      marginTop: '0',
    },
  },
  '@media only screen and (min-width: 774px)': {
    /* for-tablet-portrait-up */
    gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
  },
  '@media only screen and (min-width: 900px)': {
    /* for-tablet-landscape-up */
    gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
  },
  '@media only screen and (min-width: 1023px)': {
    /* for-desktop-up */
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
  },
  '@media only screen and (min-width: 1200px)': {
    /* for-high-res-desktop-up */
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
  },
})
