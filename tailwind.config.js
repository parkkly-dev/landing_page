/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#081630",
          "200": "rgba(0, 0, 0, 0.6)",
          "300": "rgba(0, 0, 0, 0.35)",
        },
        snow: "#fff9f9",
        whitesmoke: "#f2f4f6",
        blue: "#0000ff",
        mediumslateblue: {
          "100": "#6a6bfb",
          "200": "#0066ff",
        },
        gainsboro: "#e5e5e5",
        darkslateblue: "#21408e",
        midnightblue: "#002770",
        black: "#000",
        silver: "#c4c4c4",
        cornflowerblue: "#4766b5",
        mediumpurple: "#8585ff",
        mediumblue: "#3333ff",
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
        "dm-serif-display": "'DM Serif Display'",
        manrope: "Manrope",
      },
      borderRadius: {
        "3xs": "10px",
        "31xl": "50px",
        mid: "17px",
      },
    },
    fontSize: {
      lg: "18px",
      "6xl": "25px",
      "9xl": "28px",
      xl: "20px",
      "5xl": "24px",
      "11xl": "30px",
      "17xl": "36px",
      base: "16px",
      "3xl": "22px",
      lgi: "19px",
      "26xl": "45px",
      "8xl": "27px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
