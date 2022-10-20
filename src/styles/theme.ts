const baseColors = {
  primary: {
    light: "#F1E9C9",
    mid: "#DBAC2C",
    dark: "#C47F17",
  },
  secondary: {
    light: "#EBE5F9",
    mid: "#8047F8",
    dark: "#4B2995",
  },

  gray: {
    100: "#FAFAFA",
    200: "#F3F2F2",
    300: "#EDEDED",
    400: "#E6E5E5",
    500: "#D7D5D5",
    600: "#8D8686",
    700: "#574F4D",
    800: "#403937",
    900: "#272221",
  },

  success: {
    light: "#04D361",
    base: "#1B873F",
    low: "#051B0D",
  },

  danger: {
    light: "#F75A68",
    base: "#CC2937",
    low: "#2D090C",
  },

  warning: {
    light: "#FBA94C",
    base: "#EB8A1D",
    low: "#2E1B06",
  },

  white: "#ffffff",
  black: "#000000",
}

const aliases = {
  text: {
    title: baseColors.gray[900],
    base: baseColors.gray[800],
    support: baseColors.gray[700],
  },

  placeholder: baseColors.gray[600],

  "inputs-icons": baseColors.gray[500],

  shape: {
    primary: baseColors.gray[200],
    secondary: baseColors.gray[300],
    tertiary: baseColors.gray[400],
  },

  background: baseColors.gray[100],
}

const colors = {
  ...baseColors,
  ...aliases,
}

const texts = {
  heading: {
    color: colors.text.title,
    fontFamily: "'Baloo 2', cursive",
    fontSize: {
      xs: "1.125rem",
      sm: "1.25rem",
      md: "1.5rem",
      lg: "2rem",
      xl: "3rem",
    },
  },
  body: {
    color: colors.text.base,
    fontFamily: "'Roboto', sans-serif",
    fontSize: {
      "2xs": ".625rem",
      xs: ".75rem",
      sm: ".875rem",
      md: "1rem",
      ls: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
    },
  },
}

export const theme = {
  colors,
  texts,
}
