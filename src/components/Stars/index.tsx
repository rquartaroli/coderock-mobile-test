import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';
import { MaterialIcons } from '@expo/vector-icons';

import * as S from './styles';

export function Stars() {
  const [amountStars, setAmountStars] = useState(0);
  const THEME = useTheme()

  function handleActiveStars(amountStar: number) {
    if(amountStars === amountStar && amountStar === 1){
      setAmountStars(0)  
    } else {
      setAmountStars(amountStar)
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