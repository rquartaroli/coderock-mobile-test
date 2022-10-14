type Theme = {
  COLORS: {
    TITLE_HEAD: string,
    TEXT: string,
    BACKGROUND: string,
    ORANGE: string,
    ORANGE_LIGHT: string,
    GRAY: string,
  },
  FONTS: {
    FONT_FAMILY: {
      REGULAR: 'Rubik_400Regular',
      MEDIUM: 'Rubik_500Medium',
      BOLD: 'Rubik_700Bold',
      MEDIUM_ROBOTO: 'Roboto_500Medium',
    },
    FONT_SIZES: {
      XXSMALL: 22,
      XSMALL: 24,
      SMALL: 27,
      MEDIUM: 30,
      LARGE: 36,
      XLARGE: 40,
    }
  }
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}