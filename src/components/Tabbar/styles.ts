import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

type ActiveProps = {
  isActive: boolean
}

export const Container = styled.View`
 ${({ theme }) => css`
   width: 100%;
   height: ${RFValue(70)}px;
   flex-direction: row;
   justify-content: space-around;
   align-items: center;
   background-color: ${theme.COLORS.TITLE_HEAD};
 `}
`;

export const ButtonTab = styled.TouchableOpacity<ActiveProps>`
  ${({ theme, isActive }) => css`
    width: ${RFValue(50)}px;
    height: ${RFValue(50)}px;
    justify-content: center;
    align-items: center;
    ${isActive
    ?
      css`border: ${RFValue(3)}px solid ${theme.COLORS.ORANGE};`
    :
      css`border: ${RFValue(3)}px solid ${theme.COLORS.GRAY};`
    }
    background-color: ${theme.COLORS.BACKGROUND};
    border-radius: ${RFValue(25)}px;
 `}
`

export const ImageIcon = styled.Image<ActiveProps>`
  ${({ theme, isActive }) => css`
    width: ${RFValue(25)}px;
    height: ${RFValue(25)}px;
    ${isActive
    ?
      css`tint-color: ${theme.COLORS.ORANGE};`
    :
      css`tint-color: ${theme.COLORS.GRAY};`
    }
 `}
`