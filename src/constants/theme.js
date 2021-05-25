const theme = {
  colors: {
    bgPrimary: {
      rest: "#003459",
      hover: "#406783",
      inactive: "##8099AC",
    },
    bgSecondary: {
      rest: "#28AFB0",
      hover: "#5EC3C4",
      inactive: "#93D7D7",
    },
    bgTetiary: {
      rest: "#007EA7",
      hover: "#409EBD",
      inactive: "#80BFD3",
    },
    white: "#ffff",
    textColor: "#4a4a4a",
    default: "#C4C4C4", //grey
    accent1: "#00A8E8",
    accent2: "#7BD2F3",
    black: "#4a4a4a",
    greyish: "#E5E5E5",
    background: "#F1F3F4",
    PSGrey: "#696969",
  },
  borderRadius: "6px",
  fontSize: {
    text: {
      smallScreen: "12px", //mobile, phablet, tablet
      normalScreen: "14px", //laptop, desktop
      largeScreen: "20px", //large desktop, TVs
    },
    header: {
      smallScreen: "16px", //mobile, phablet, tablet
      normalScreen: "18px", //laptop, desktop
      largeScreen: "26px", //large desktop
      extraLarge: "40px",
    },
  },
};

export default theme;
