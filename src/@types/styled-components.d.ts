import { theme } from '../styles/theme'

type Theme = {
  COLORS: {
    TITLE_HEAD: string,
    TEXT: string,
    BACKGROUND: string,
    BACKGROUND_GRAY: string,
    LINE_BORDER: string,
    ORANGE: string,
    ORANGE_LIGHT: string,
    GRAY: string,
    GRAY_LIGHT: string,
  },
  FONTS: {
    FONT_FAMILY: {
      REGULAR: 'Rubik_400Regular',
      MEDIUM: 'Rubik_500Medium',
      BOLD: 'Rubik_700Bold',
      MEDIUM_ROBOTO: 'Roboto_500Medium',
    },
    FONT_SIZES: {
      XXSMALL: 14,
      XSMALL: 16,
      SMALL: 18,
      MEDIUM: 24,
      LARGE: 28,
      XLARGE: 32,
    }
  }
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}