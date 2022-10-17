import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';
import { MaterialIcons } from '@expo/vector-icons';

import * as S from './styles';
import { usePostsContext } from '../../hooks/postsContext';

type StarsProps = {
  idPost: string
  starsAmount: number
}

export function Stars({ idPost, starsAmount }: StarsProps) {
  const [amountStars, setAmountStars] = useState(starsAmount);
  const THEME = useTheme()

  const { UpdateStars } = usePostsContext();

  function handleActiveStars(amountStar: number) {
    if(amountStars === amountStar && amountStar === 1){
      setAmountStars(0)  
      UpdateStars(idPost, amountStar)
    } else {
      setAmountStars(amountStar)
      UpdateStars(idPost, amountStar)
    }
  }

  return (
    <S.Container>
      <S.ButtonStar onPress={() => handleActiveStars(1)}>
        <MaterialIcons 
          name={ amountStars >= 1 ? "star" : "star-border" }
          size={RFValue(25)} 
          color={THEME.COLORS.ORANGE} 
        />
      </S.ButtonStar>
      <S.ButtonStar onPress={() => handleActiveStars(2)}>
        <MaterialIcons 
          name={ amountStars >= 2 ? "star" : "star-border" }
          size={RFValue(25)} 
          color={THEME.COLORS.ORANGE} 
        />
      </S.ButtonStar>
      <S.ButtonStar onPress={() => handleActiveStars(3)}>
        <MaterialIcons 
          name={ amountStars >= 3 ? "star" : "star-border" }
          size={RFValue(25)} 
          color={THEME.COLORS.ORANGE} 
        />
      </S.ButtonStar>
      <S.ButtonStar onPress={() => handleActiveStars(4)}>
        <MaterialIcons 
          name={ amountStars >= 4 ? "star" : "star-border" }
          size={RFValue(25)} 
          color={THEME.COLORS.ORANGE} 
        />
      </S.ButtonStar>
      <S.ButtonStar onPress={() => handleActiveStars(5)}>
        <MaterialIcons 
          name={ amountStars >= 5 ? "star" : "star-border" }
          size={RFValue(25)} 
          color={THEME.COLORS.ORANGE} 
        />
      </S.ButtonStar>

    </S.Container>
  );
}