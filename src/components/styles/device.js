const breakpoints = {
  desktopLg: "81.25em",
  desktop: "71.25em",
  desktopSm: "61.25em",
  tablet: "46.25em",
  mobile: "22.5em"
};
// 1300, 1140, 980, 760, 360px

// https://jsramblings.com/2018/02/04/styled-components-media-queries.html
export const device = {
  mobile: `(min-width: ${breakpoints.mobile})`,
  tablet: `(min-width: ${breakpoints.tablet})`,
  desktopSm: `(min-width: ${breakpoints.desktopSm})`,
  desktop: `(min-width: ${breakpoints.desktop})`,
  desktopLg: `(min-width: ${breakpoints.desktopLg})`
};
