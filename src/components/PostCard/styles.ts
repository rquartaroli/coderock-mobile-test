import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

type ContainerProps = {
  isRightSide?: boolean
}

export const Container = styled.TouchableOpacity<ContainerProps>`
 ${({ theme, isRightSide }) => css`
   width: 100%;
   height: ${RFValue(200)}px;
   flex-direction: row;
   ${isRightSide
    ?
    css`background-color: ${theme.COLORS.BACKGROUND_GRAY};`
    :
    css`background-color: ${theme.COLORS.BACKGROUND};`
    }
   
 `}
`

export const ImagePost = styled.Image`
  flex: 1;
  object-fit: cover;
`

export const ContentPost = styled.View`
  width: 60%;
  justify-content: space-between;
  padding: ${RFValue(8)}px ${RFValue(12)}px;
`

export const Author = styled.Text`
  ${({ theme }) => css`
   font-family: ${theme.FONTS.FONT_FAMILY.MEDIUM};
   font-size: ${RFValue(theme.FONTS.FONT_SIZES.XXSMALL)}px;
   color: ${theme.COLORS.TEXT};
 `}
`

export const TitlePost = styled.Text`
  ${({ theme }) => css`
   font-family: ${theme.FONTS.FONT_FAMILY.BOLD};
   font-size: ${RFValue(theme.FONTS.FONT_SIZES.LARGE)}px;
   color: ${theme.COLORS.ORANGE_LIGHT};
 `}
`

export const ArticlePost = styled.Text`
  ${({ theme }) => css`
   font-family: ${theme.FONTS.FONT_FAMILY.REGULAR};
   font-size: ${RFValue(theme.FONTS.FONT_SIZES.XSMALL)}px;
   color: ${theme.COLORS.TEXT};
   margin-top: ${RFValue(8)}px;
 `}
`