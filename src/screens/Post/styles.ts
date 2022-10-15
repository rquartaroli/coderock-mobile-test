import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ScrollViewContainer = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})``

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  padding: ${RFValue(20)}px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
   font-family: ${theme.FONTS.FONT_FAMILY.BOLD};
   font-size: ${RFValue(theme.FONTS.FONT_SIZES.XLARGE)}px;
   color: ${theme.COLORS.ORANGE_LIGHT};
 `}
`

export const WrapperAuthor = styled.View`
  margin: ${RFValue(20)}px 0;
`

export const InfoAuthor = styled.Text`
  ${({ theme }) => css`
   font-family: ${theme.FONTS.FONT_FAMILY.REGULAR};
   font-size: ${RFValue(theme.FONTS.FONT_SIZES.SMALL)}px;
   color: ${theme.COLORS.TEXT};
 `}
`

export const Author = styled.Text`
  ${({ theme }) => css`
   font-family: ${theme.FONTS.FONT_FAMILY.BOLD};
   font-size: ${RFValue(theme.FONTS.FONT_SIZES.SMALL)}px;
   color: ${theme.COLORS.TEXT};
 `}
`

export const Article = styled.Text`
  ${({ theme }) => css`
   font-family: ${theme.FONTS.FONT_FAMILY.REGULAR};
   font-size: ${RFValue(theme.FONTS.FONT_SIZES.XSMALL)}px;
   color: ${theme.COLORS.TEXT};
   margin-top: ${RFValue(20)}px;
 `}
`