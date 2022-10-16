import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
 ${({ theme }) => css`
   flex: 1;
   background-color: ${theme.COLORS.OVERLAY_MODAL};
 `}
`;

export const Content = styled.ScrollView`
  margin: ${RFValue(28)}px ${RFValue(40)}px;
`