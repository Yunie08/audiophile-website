// const sizes = {
//   mobileS: "320px",
//   mobileM: "375px",
//   mobileL: "425px",
//   tablet: "768px",
//   laptop: "991px",
//   laptopL: "1440px",
//   desktop: "2560px",
// };
const sizes = {
  mobileS: "375px",
  mobileM: "425px",
  mobileL: "767px",
  tablet: "991px",
  laptop: "1279px",
  laptopL: "1439px",
  desktop: "2560px",
};

export const getMediaQuery = (size) => {
  return `screen and (max-width: ${size})`;
};

export const device = {
  mobileS: getMediaQuery(sizes.mobileS),
  mobileM: getMediaQuery(sizes.mobileM),
  mobileL: getMediaQuery(sizes.mobileL),
  tablet: getMediaQuery(sizes.tablet),
  laptop: getMediaQuery(sizes.laptop),
  laptopL: getMediaQuery(sizes.laptopL),
  desktop: getMediaQuery(sizes.desktop),
  desktopL: getMediaQuery(sizes.desktopL),
};
