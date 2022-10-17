import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
`;

export const ButtonStar = styled.TouchableOpacity`
  margin-right: ${RFValue(4)}px;
`