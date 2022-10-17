import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

type DotProps = {
  isActive: boolean
}

export const ImageSlide = styled.Image`
   width: 100%;
   height: ${RFValue(370)}px;
`;

export const WrapperContainerDot = styled.View`
  position: relative;
`

export const WrapperDot = styled.View`
  position: absolute;
  bottom: 0;
  flex-direction: row;
  align-self: center;
`

export const Dot = styled.Text<DotProps>`
  ${({ theme, isActive }) => css`
    font-size: ${RFValue(theme.FONTS.FONT_SIZES.LARGE)}px;
    margin: 3px;
    ${isActive
      ?
      css`color: ${theme.COLORS.BACKGROUND};`
      :
      css`color: ${theme.COLORS.ORANGE};`
    }
 `}
`