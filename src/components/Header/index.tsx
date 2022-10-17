import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

import * as S from './styles';
import { useTheme } from 'styled-components';
import { View } from 'react-native';

type HeaderProps ={
  variant: 'onlyTitle' | 'withGoBack' | 'withCloseScreen' | 'withAddButton'
  title: string
  actionButton: () => void
  backGroundColor?: 'gray' | 'white'
  inModal?: boolean
}

export function Header({ 
  variant,
  title,
  actionButton,
  backGroundColor = 'gray',
  inModal = false
}: HeaderProps) {
  const THEME = useTheme();
  return (
    <S.Container backGroundColor={backGroundColor} inModal={inModal}>
      <S.WrapperLeft isGoBackLeft={variant === 'withGoBack' ? true : false}>
        {variant === 'withGoBack'
         &&
         <S.GoBack onPress={actionButton}>
          <MaterialIcons 
            name="chevron-left"
            size={RFValue(62)} 
            color={THEME.COLORS.TITLE_HEAD} 
          />
        </S.GoBack>
        }
        
        <S.Title>{ title }</S.Title>
      </S.WrapperLeft>

      {variant === 'withAddButton'
      ?
        <S.WrapperRight onPress={actionButton}>
          <MaterialIcons 
            name="add"
            size={RFValue(42)} 
            color={THEME.COLORS.ORANGE} 
          />
        </S.WrapperRight>
      : variant === 'withCloseScreen'
      ?
        <S.WrapperRightWithClose onPress={actionButton}>
          <MaterialIcons 
            name="close"
            size={42} 
            color={THEME.COLORS.ORANGE} 
          />
        </S.WrapperRightWithClose>
      :
        <View />
      }
    </S.Container>
  );
}