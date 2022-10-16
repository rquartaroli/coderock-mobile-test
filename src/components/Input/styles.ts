import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const InputField = styled.TextInput`
 ${({ theme }) => css`
    width: 100%;
    padding: ${RFValue(8)}px ${RFValue(12)}px;
    background-color: ${theme.COLORS.BACKGROUND};
    border: 2px solid ${theme.COLORS.ORANGE};
 `}
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONTS.FONT_FAMILY.MEDIUM};
    font-size: ${theme.FONTS.FONT_SIZES.SMALL}px;
    color: ${theme.COLORS.TITLE_HEAD};
    margin-top: ${RFValue(28)}px;
    margin-bottom: ${RFValue(8)}px;
 `}
`

export const ErrorMsg = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONTS.FONT_FAMILY.MEDIUM};
    font-size: ${theme.FONTS.FONT_SIZES.XXSMALL}px;
    color: ${theme.COLORS.PLACEHOLDER_INPUT};
 `}
`