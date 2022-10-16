import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { Control, Controller } from 'react-hook-form';
import { useTheme } from 'styled-components';

import * as S from './styles';

export type FormData = {
  name: string
  email: string
  phone: string
  message: string
}

type InputProps = TextInputProps & {
  control: Control<FormData>
  name: "name" | "message" | "email" | "phone"
  title: string
  error?: string
  isRef?: React.Ref<TextInput> | undefined
}

export function Input({ control, name, title, error, isRef, ...rest }: InputProps) {
  const THEME = useTheme();

  return (
    <>
      <S.Label>
        { title }
      </S.Label>
      <Controller 
        control={control}
        render={({ field: { onChange, value } }) => (
          <S.InputField 
            placeholderTextColor={THEME.COLORS.PLACEHOLDER_INPUT}
            onChangeText={onChange}
            value={value}
            ref={isRef}
            {...rest}
          />
        )}
        name={name}
      />
      { error 
        &&
        <S.ErrorMsg>
          * { error }
        </S.ErrorMsg>
      }
    </>
  );
}