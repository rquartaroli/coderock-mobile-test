import React from 'react';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';

import * as S from './styles';

type InputProps = TextInputProps & {
  title: string
  error?: string
}

export function Input({ title, error, ...rest }: InputProps) {
  const THEME = useTheme();

  return (
    <>
      <S.Label>
        { title }
      </S.Label>
      <S.InputField 
        placeholderTextColor={THEME.COLORS.PLACEHOLDER_INPUT}
        {...rest}
      />
    </>
  );
}