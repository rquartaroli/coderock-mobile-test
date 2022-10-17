import styled, { css } from 'styled-components/native';

export const Container = styled.SafeAreaView`
 ${({ theme }) => css`
   flex: 1;
   background-color: ${theme.COLORS.BACKGROUND};
 `}
`;