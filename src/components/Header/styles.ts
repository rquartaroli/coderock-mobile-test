import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

type ContainerProps = {
  backGroundColor?: 'gray' | 'white'
}

type WrapperLeftProps = {
  isGoBackLeft: boolean
}

export const Container = styled.View<ContainerProps>`
 ${({ theme, backGroundColor }) => css`
   width: 100%;
   height: ${RFValue(100)}px;
   padding-top: ${RFValue(20)}px;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   
   ${backGroundColor === 'gray'
    ?
    css`
      background-color: ${theme.COLORS.GRAY_LIGHT};
      border-color: ${theme.COLORS.GRAY_LIGHT};
      border-bottom-width: 1px;
      shadow-color: ${theme.COLORS.LINE_BORDER};
      shadow-opacity: 0.8;
      shadow-radius: 5px;
      elevation: 6;
    `
    :
    css`
      border-bottom-width: 1px;
      border-bottom-color: ${theme.COLORS.LINE_BORDER};
      background-color: ${theme.COLORS.BACKGROUND};
    `
    }
 `}
`;

export const GoBack = styled.TouchableOpacity`
`

export const WrapperLeft = styled.View<WrapperLeftProps>`
  ${({ isGoBackLeft }) => css`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    ${!isGoBackLeft 
      &&
      css`margin-left: ${RFValue(40)}px;`
    }
 `}
`

export const WrapperRight = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: ${RFValue(50)}px;
    height: ${RFValue(50)}px;
    justify-content: center;
    align-items: center;
    margin-right: ${RFValue(16)}px;
    background-color: ${theme.COLORS.BACKGROUND};
    border-radius: ${RFValue(25)}px;
    border: ${RFValue(3)}px solid ${theme.COLORS.ORANGE};
 `}
`

export const WrapperRightWithClose = styled.TouchableOpacity`
  width: ${RFValue(60)}px;
  height: ${RFValue(60)}px;
  justify-content: center;
  align-items: center;
  margin-right: ${RFValue(16)}px;
  border: ${RFValue(3)}px solid transparent;
`

export const Title = styled.Text`
  ${({ theme }) => css`
   font-family: ${theme.FONTS.FONT_FAMILY.MEDIUM_ROBOTO};
   font-size: ${RFValue(theme.FONTS.FONT_SIZES.MEDIUM)}px;
   color: ${theme.COLORS.TITLE_HEAD};
 `}
`