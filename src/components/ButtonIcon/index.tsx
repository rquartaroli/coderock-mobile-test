import React from 'react';
import { ColorValue } from 'react-native';

import SendIcon from '../../assets/send.png';
import CreatePostIcon from '../../assets/createPost.png';

import * as S from './styles';
import { THEME } from '../../theme';

type ButtonIconProps = {
  title: string
  typeIcon: 'send' | 'createPost'
  colorValue?: ColorValue
  onPress: () => void
}

export function ButtonIcon({ 
  title, 
  typeIcon, 
  colorValue = THEME.COLORS.ORANGE, 
  onPress,
}: ButtonIconProps) {

  return (
    <S.ButtonPress 
      style={{ backgroundColor: colorValue }}
      onPress={onPress}
    >
      {typeIcon === 'send'
      ?
        <S.ImageIcon source={SendIcon} />
      :
        <S.ImageIcon source={CreatePostIcon} />
      }
      
      <S.TextButton>
        { title }
      </S.TextButton>
    </S.ButtonPress>
  );
}