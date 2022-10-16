import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const ButtonPress = styled.TouchableOpacity`
  height: ${RFValue(60)}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${RFValue(14)}px ${RFValue(28)}px;
`;

export const ImageIcon = styled.Image`
  ${({ theme }) => css`
    width: ${RFValue(25)}px;
    height: ${RFValue(25)}px;
    tint-color: ${theme.COLORS.BACKGROUND};
 `}
`

export const TextButton = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONTS.FONT_FAMILY.MEDIUM};
    font-size: ${theme.FONTS.FONT_SIZES.SMALL}px;
    color: ${theme.COLORS.BACKGROUND};
    margin-left: ${RFValue(18)}px;
 `}
`
