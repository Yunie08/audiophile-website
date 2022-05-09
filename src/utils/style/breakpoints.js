const sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

const getMediaQuery = (size) => {
  return `media: screen and (min-width: ${size})`;
};

export const device = {
  mobileS: getMediaQuery(sizes.mobileS),
  mobileM: getMediaQuery(sizes.mobileM),
  mobileL: getMediaQuery(sizes.mobileL),
  tablet: getMediaQuery(sizes.tablet),
  laptop: `media: screen and (min-width: ${sizes.laptop})`,
  laptopL: `media: screen and (min-width: ${sizes.laptopL})`,
  desktop: getMediaQuery(sizes.desktop),
  desktopL: getMediaQuery(sizes.desktopL),
};
