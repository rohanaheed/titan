const colors = require("tailwindcss/colors")
const plugin = require("tailwindcss/plugin")

module.exports = {
  purge: [ "./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}", ],
  important: true,

  // mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        poppins: ["'Poppins'"],
        lato: ["'Lato'"],
        roboto: ["'Roboto'"],
      },
      fontSize: {

        1: "0.0625rem",
        2: "0.125rem",
        3: "0.1875rem",
        4: "0.25rem",
        5: "0.3125rem",
        6: "0.375rem",
        7: "0.4375rem",
        8: "0.5rem",
        9: "0.5625rem",
        10: "0.625rem",
        11: "0.6875rem",
        12: "0.75rem",
        13: "0.8125rem",
        14: "0.875rem",
        15: "0.9375rem",
        16: "1rem",
        17: "1.0625rem",
        18: "1.125rem",
        19: "1.1875rem",
        20: "1.25rem",
        21: "1.3125rem",
        22: "1.375rem",
        23: "1.4475rem",
        24: "1.5rem",
        25: "1.5625rem",
        26: "1.625rem",
        27: "1.6875rem",
        28: "1.75rem",
        29: "1.8125rem",
        30: "1.875rem",
        31: "1.9375rem",
        32: "2rem",
        33: "2.0625rem",
        34: "2.125rem",
        35: "2.1875rem",
        36: "2.25rem",
        37: "2.3125rem",
        38: "2.375rem",
        39: "2.4475rem",
        40: "2.5rem",
        41: "2.5625rem",
        42: "2.625rem",
        43: "2.6875rem",
        44: "2.75rem",
        45: "2.8125rem",
        46: "2.875rem",
        47: "2.975rem",
        48: "3rem",
        49: "3.0625rem",
        50: "3.125rem",
        51: "3.1875rem",
        52: "3.25rem",
        53: "3.3125rem",
        54: "3.375rem",
        55: "3.4375rem",
        56: "3.5rem",
        57: "3.5625rem",
        58: "3.625rem",
        59: "3.6875rem",
        60: "3.75rem",
        61: "3.8125rem",
        62: "3.875rem",
        63: "3.9375rem",
        64: "4rem",
        64: "4rem",
        65: "4.0625rem",
        66: "4.125rem",
        67: "4.1875rem",
        68: "4.25rem",
        69: "4.3125rem",
        70: "4.375rem",
        71: "4.4375rem",
        72: "4.5rem",
        73: "4.5625rem",
        74: "4.625rem",
        75: "4.6875rem",
        76: "4.75rem",
        77: "4.8125rem",
        78: "4.875rem",
        79: "4.9375rem",
        80: "5rem",
        81: "5.0626rem",
        82: "5.125rem",
        83: "5.1875rem",
        84: "5.25rem",
        85: "5.3125rem",
        86: "5.375rem",
        87: "5.4375rem",
        88: "5.5rem",
        89: "5.5625rem",
        90: "5.625rem",
        91: "5.6875rem",
        92: "5.75rem",
        93: "5.8125rem",
        94: "5.875rem",
        95: "5.9375rem",
        96: "6rem",
        97: "6.0625rem",
        98: "6.125rem",
        99: "6.1875rem",
        100: "6.25rem",
      },
      padding: {
        1: "0.0625rem",
        2: "0.125rem",
        3: "0.1875rem",
        4: "0.25rem",
        5: "0.3125rem",
        6: "0.375rem",
        7: "0.4375rem",
        8: "0.5rem",
        9: "0.5625rem",
        10: "0.625rem",
        11: "0.6875rem",
        12: "0.75rem",
        13: "0.8125rem",
        14: "0.875rem",
        15: "0.9375rem",
        16: "1rem",
        17: "1.0625rem",
        18: "1.125rem",
        19: "1.1875rem",
        20: "1.25rem",
        21: "1.3125rem",
        22: "1.375rem",
        23: "1.4475rem",
        24: "1.5rem",
        25: "1.5625rem",
        26: "1.625rem",
        27: "1.6875rem",
        28: "1.75rem",
        29: "1.8125rem",
        30: "1.875rem",
        31: "1.9375rem",
        32: "2rem",
        33: "2.0625rem",
        34: "2.125rem",
        35: "2.1875rem",
        36: "2.25rem",
        37: "2.3125rem",
        38: "2.375rem",
        39: "2.4475rem",
        40: "2.5rem",
        41: "2.5625rem",
        42: "2.625rem",
        43: "2.6875rem",
        44: "2.75rem",
        45: "2.8125rem",
        46: "2.875rem",
        47: "2.975rem",
        48: "3rem",
        49: "3.0625rem",
        50: "3.125rem",
        51: "3.1875rem",
        52: "3.25rem",
        53: "3.3125rem",
        54: "3.375rem",
        55: "3.4375rem",
        56: "3.5rem",
        57: "3.5625rem",
        58: "3.625rem",
        59: "3.6875rem",
        60: "3.75rem",
        61: "3.8125rem",
        62: "3.875rem",
        63: "3.9375rem",
        64: "4rem",
        64: "4rem",
        65: "4.0625rem",
        66: "4.125rem",
        67: "4.1875rem",
        68: "4.25rem",
        69: "4.3125rem",
        70: "4.375rem",
        71: "4.4375rem",
        72: "4.5rem",
        73: "4.5625rem",
        74: "4.625rem",
        75: "4.6875rem",
        76: "4.75rem",
        77: "4.8125rem",
        78: "4.875rem",
        79: "4.9375rem",
        80: "5rem",
        81: "5.0626rem",
        82: "5.125rem",
        83: "5.1875rem",
        84: "5.25rem",
        85: "5.3125rem",
        86: "5.375rem",
        87: "5.4375rem",
        88: "5.5rem",
        89: "5.5625rem",
        90: "5.625rem",
        91: "5.6875rem",
        92: "5.75rem",
        93: "5.8125rem",
        94: "5.875rem",
        95: "5.9375rem",
        96: "6rem",
        97: "6.0625rem",
        98: "6.125rem",
        99: "6.1875rem",
        100: "6.25rem",
        112: "7rem",
      },
      margin: {
        auto: "auto",
        1: "0.0625rem",
        2: "0.125rem",
        3: "0.1875rem",
        4: "0.25rem",
        5: "0.3125rem",
        6: "0.375rem",
        7: "0.4375rem",
        8: "0.5rem",
        9: "0.5625rem",
        10: "0.625rem",
        11: "0.6875rem",
        12: "0.75rem",
        13: "0.8125rem",
        14: "0.875rem",
        15: "0.9375rem",
        16: "1rem",
        17: "1.0625rem",
        18: "1.125rem",
        19: "1.1875rem",
        20: "1.25rem",
        21: "1.3125rem",
        22: "1.375rem",
        23: "1.4475rem",
        24: "1.5rem",
        25: "1.5625rem",
        26: "1.625rem",
        27: "1.6875rem",
        28: "1.75rem",
        29: "1.8125rem",
        30: "1.875rem",
        31: "1.9375rem",
        32: "2rem",
        33: "2.0625rem",
        34: "2.125rem",
        35: "2.1875rem",
        36: "2.25rem",
        37: "2.3125rem",
        38: "2.375rem",
        39: "2.4475rem",
        40: "2.5rem",
        41: "2.5625rem",
        42: "2.625rem",
        43: "2.6875rem",
        44: "2.75rem",
        45: "2.8125rem",
        46: "2.875rem",
        47: "2.975rem",
        48: "3rem",
        49: "3.0625rem",
        50: "3.125rem",
        51: "3.1875rem",
        52: "3.25rem",
        53: "3.3125rem",
        54: "3.375rem",
        55: "3.4375rem",
        56: "3.5rem",
        57: "3.5625rem",
        58: "3.625rem",
        59: "3.6875rem",
        60: "3.75rem",
        61: "3.8125rem",
        62: "3.875rem",
        63: "3.9375rem",
        64: "4rem",
        64: "4rem",
        65: "4.0625rem",
        66: "4.125rem",
        67: "4.1875rem",
        68: "4.25rem",
        69: "4.3125rem",
        70: "4.375rem",
        71: "4.4375rem",
        72: "4.5rem",
        73: "4.5625rem",
        74: "4.625rem",
        75: "4.6875rem",
        76: "4.75rem",
        77: "4.8125rem",
        78: "4.875rem",
        79: "4.9375rem",
        80: "5rem",
        81: "5.0626rem",
        82: "5.125rem",
        83: "5.1875rem",
        84: "5.25rem",
        85: "5.3125rem",
        86: "5.375rem",
        87: "5.4375rem",
        88: "5.5rem",
        89: "5.5625rem",
        90: "5.625rem",
        91: "5.6875rem",
        92: "5.75rem",
        93: "5.8125rem",
        94: "5.875rem",
        95: "5.9375rem",
        96: "6rem",
        97: "6.0625rem",
        98: "6.125rem",
        99: "6.1875rem",
        100: "6.25rem",
        107: "6.6875rem",
        202: "12.625rem",
      },
      lineHeight: {
        none: "1",
        tight: "1.25",
        snug: "1.375",
        normal: "1.5",
        relaxed: "1.625",
        loose: "2",
        1: "0.0625rem",
        2: "0.125rem",
        3: "0.1875rem",
        4: "0.25rem",
        5: "0.3125rem",
        6: "0.375rem",
        7: "0.4375rem",
        8: "0.5rem",
        9: "0.5625rem",
        10: "0.625rem",
        11: "0.6875rem",
        12: "0.75rem",
        13: "0.8125rem",
        14: "0.875rem",
        15: "0.9375rem",
        16: "1rem",
        17: "1.0625rem",
        18: "1.125rem",
        19: "1.1875rem",
        20: "1.25rem",
        21: "1.3125rem",
        22: "1.375rem",
        23: "1.4475rem",
        24: "1.5rem",
        25: "1.5625rem",
        26: "1.625rem",
        27: "1.6875rem",
        28: "1.75rem",
        29: "1.8125rem",
        30: "1.875rem",
        31: "1.9375rem",
        32: "2rem",
        33: "2.0625rem",
        34: "2.125rem",
        35: "2.1875rem",
        36: "2.25rem",
        37: "2.3125rem",
        38: "2.375rem",
        39: "2.4475rem",
        40: "2.5rem",
        41: "2.5625rem",
        42: "2.625rem",
        43: "2.6875rem",
        44: "2.75rem",
        45: "2.8125rem",
        46: "2.875rem",
        47: "2.975rem",
        48: "3rem",
        49: "3.0625rem",
        50: "3.125rem",
        51: "3.1875rem",
        52: "3.25rem",
        53: "3.3125rem",
        54: "3.375rem",
        55: "3.4375rem",
        56: "3.5rem",
        57: "3.5625rem",
        58: "3.625rem",
        59: "3.6875rem",
        60: "3.75rem",
        61: "3.8125rem",
        62: "3.875rem",
        63: "3.9375rem",
        64: "4rem",
        64: "4rem",
        65: "4.0625rem",
        66: "4.125rem",
        67: "4.1875rem",
        68: "4.25rem",
        69: "4.3125rem",
        70: "4.375rem",
        71: "4.4375rem",
        72: "4.5rem",
        73: "4.5625rem",
        74: "4.625rem",
        75: "4.6875rem",
        76: "4.75rem",
        77: "4.8125rem",
        78: "4.875rem",
        79: "4.9375rem",
        80: "5rem",
        81: "5.0626rem",
        82: "5.125rem",
        83: "5.1875rem",
        84: "5.25rem",
        85: "5.3125rem",
        86: "5.375rem",
        87: "5.4375rem",
        88: "5.5rem",
        89: "5.5625rem",
        90: "5.625rem",
        91: "5.6875rem",
        92: "5.75rem",
        93: "5.8125rem",
        94: "5.875rem",
        95: "5.9375rem",
        96: "6rem",
        97: "6.0625rem",
        98: "6.125rem",
        99: "6.1875rem",
        100: "6.25rem",
      },
      width: {
        0: "0px",
        1: "1px",
        2: "0.125rem",
        4: "0.25rem",
        5: "0.3125rem",
        6: "0.375rem",
        8: "0.5rem",
        10: "0.625rem",
        "420": "420px",
        12: "0.75rem",
        14: "0.875rem",
        16: "1rem",
        17: "1.0625rem",
        18: "1.125rem",
        20: "1.25rem",
        24: "1.5rem",
        28: "1.75rem",
        32: "2rem",
        33: "2.0625rem",
        36: "2.25rem",
        40: "2.5rem",
        44: "2.75rem",
        47: "2.9375rem",
        48: "3rem",
        56: "3.5rem",
        57: "3.5625rem",
        61: "3.8125rem",
        64: "4rem",
        65: "4.0625rem",
        71: "4.4375rem",
        73: "4.5625rem",
        76: "4.75rem",
        80: "5rem",
        95: "5.9375rem",
        96: "6rem",
        99: "6.1875rem",
        112: "7rem",
        120: "7.5rem",
        128: "8rem",
        131: "8.1875rem",
        144: "9rem",
        148: "9.25rem",
        150: "9.375rem",
        160: "10rem",
        167: "10.4375rem",
        176: "11rem",
        183: "11.4375rem",
        192: "12rem",
        205: "12.813rem",
        206: "12.875rem",
        208: "13rem",
        221: "13.8125rem",
        224: "14rem",
        240: "15rem",
        256: "16rem",
        288: "18rem",
        291: "18.1875rem",
        319: "19.9375rem",
        320: "20rem",
        340: "21.25rem",
        343: "21.4375rem",
        375: "23.4375rem",
        384: "24rem",
        auto: "auto",
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/6": "16.666667%",
        "2/6": "33.333333%",
        "3/6": "50%",
        "4/6": "66.666667%",
        "5/6": "83.333333%",
        "1/12": "8.333333%",
        "2/12": "16.666667%",
        "3/12": "25%",
        "4/12": "33.333333%",
        "5/12": "41.666667%",
        "6/12": "50%",
        "7/12": "58.333333%",
        "8/12": "66.666667%",
        "9/12": "75%",
        "10/12": "83.333333%",
        "11/12": "91.666667%",
        full: "100%",
        screen: "100vw",
        min: "min-conten",
        max: "max-content",
      },
      height: {
        0: "0px",
        1: "1px",
        2: "0.125rem",
        4: "0.25rem",
        5: "0.3125rem",
        6: "0.375rem",
        8: "0.5rem",
        10: "0.625rem",
        12: "0.75rem",
        14: "0.875rem",
        16: "1rem",
        17: "1.0625rem",
        20: "1.25rem",
        24: "1.5rem",
        25: "1.5625rem",
        26: "1.625rem",
        26: "1.6875rem",
        28: "1.75rem",
        32: "2rem",
        36: "2.25rem",
        38: "2.375rem",
        40: "2.5rem",
        45: "2.8125rem",
        46: "2.875rem",
        44: "2.75rem",
        47: "2.9375rem",
        48: "3rem",
        54: "3.375rem",
        55: "3.4375rem",
        56: "3.5rem",
        58: "3.625rem",
        60: "3.75rem",
        64: "4rem",
        71: "4.4375rem",
        73: "4.5625rem",
        76: "4.75rem",
        80: "5rem",
        96: "6rem",
        112: "7rem",
        126: "7.875rem",
        128: "8rem",
        137: "8.563rem",
        144: "9rem",
        160: "10rem",
        176: "11rem",
        192: "12rem",
        200: "12.5rem",
        208: "13rem",
        224: "14rem",
        240: "15rem",
        256: "16rem",
        288: "18rem",
        320: "20rem",
        323: "20.1875rem",
        384: "24rem",
        800: "800px",
        auto: "auto",
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/6": "16.666667%",
        "2/6": "33.333333%",
        "3/6": "50%",
        "4/6": "66.666667%",
        "5/6": "83.333333%",
        "1/12": "8.333333%",
        "2/12": "16.666667%",
        "3/12": "25%",
        "4/12": "33.333333%",
        "5/12": "41.666667%",
        "6/12": "50%",
        "7/12": "58.333333%",
        "8/12": "66.666667%",
        "9/12": "75%",
        "10/12": "83.333333%",
        "11/12": "91.666667%",
        full: "100%",
        screen: "100vw",
        min: "min-conten",
        max: "max-content",
      },
      colors: {
        primary: "#CEC875",
        "primary-dark": "#461584",
        "primary-light": "#F0E4FF",
        "secondary": "var(--secondary-color)",
        transparent: "transparent",
        background: "#FAF7FF",
        "primary-text": "var(--primary-text-color)",
        "primary-light-card": "#EFE3FF",
        "primary-dark-text": "#662DAF",
        "secondary-text": "var(--secondary-text-color)",
        "tertiary-text": "#B2B0AF",
        "page-background": "#662DAF",
        "purple-dark": "#662DAF",
        "tab-bg": "#EAE6EE",
        "navbar-link-bg": "rgba(121, 57, 203, 0.16)",
        "blur-overlay-bg": "rgba(0, 0, 0, 0.35)",
        "yellow-btn": "#FFEEC1",
        current: "currentColor",
        gray: colors.trueGray,
        red: colors.rose,
        yellow: "#FF8A00",
        "yellow-light": "rgba(255, 138, 0, 0.2)",
        green: colors.green,
        blue: colors.blue,
        "blue-card": "#3F9AE0",
        indigo: colors.indigo,
        purple: colors.purple,
        pink: colors.pink,
        "pink-card": "#F94687",
        "pink-logout": "#F94687",
        "pink-error": "#cf2623",
        black: colors.black,
        white: colors.white,
        "white-50%": "rgba(255, 255, 255, 0.5)",
        "white-66%": "rgba(255, 255, 255, 0.66)",
        gray: {
          "placeholder-bg": "#F2F2F2",
          100: "#F3F3F3",
          180: "#ececec",
          200: "#EEEEEE",
          300: "#c4c4c4",
          310: "#CBCBCB",
          330: "#c6c6c6",
          350: "#bbbbbb",
          400: "#EDEDED",
        },
      },
      maxWidth: {
        767: "767px",
      },
      spacing: {
        15: "3.75rem",
        14: "14px",
        "4px": "4px",
        21: "21px",
      },
      opacity: {
        66: "0.66",
      },
      borderRadius: {
        3: "0.1875rem",
        5: "0.3125rem",
        "md-2": "0.5rem",
        8: "0.5rem",
        lg: "0.625rem",
        20: "1.25rem",
        "4xl": "1.75rem",
        30: "30px",
      },

      scale: {
        57: ".57",
      },
      boxShadow: {
        btn: "0px 16px 30px rgba(55, 0, 125, 0.1)",
        nav: "0px 11px 21px rgba(121, 57, 203, 0.12)",
        search: "0px 7px 8px rgba(0, 0, 0, 0.04)",
        card: "0px 4px 4px rgba(102, 45, 175, 0.04)",
        notification: "0px 6px 12px rgba(54, 25, 92, 0.08)",
        "top-right-menu": "0px 14px 24px rgba(0, 0, 0, 0.25)",
        "btn-apply-now": "0px 11px 21px rgba(121, 57, 203, 0.47)",
        "btn-company-profile": "0px 11px 21px rgba(121, 57, 203, 0.13)",
        "regular-card": "2px 1px 5px rgba(18, 34, 97, 0.1)",
      },
      minHeight: {
        800: "800px",
      },
      inset: {
        19: "19px",
        unset: "unset",
      },
      translate: {
        5: "1.375rem",
      },
    },
  },
  variants: {
    extend: {
      textColor: ["disabled"],
      opacity: ["disabled"],
      cursor: ["disabled"],
    },
  },
  plugins: []
}
