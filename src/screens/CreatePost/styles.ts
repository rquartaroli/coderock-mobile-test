import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
 ${({ theme }) => css`
   flex: 1;
 `}
`;

export const Content = styled.ScrollView`
  margin: ${RFValue(0)}px ${RFValue(40)}px;
`

export const WrapperButtonModal = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: ${RFValue(28)}px;
`
