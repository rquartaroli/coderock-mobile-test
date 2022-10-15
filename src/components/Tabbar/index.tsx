import React, { useState } from 'react';

import iconPosts from '../../assets/iconPosts.png';
import iconContact from '../../assets/iconContact.png';

import * as S from './styles';

export function Tabbar() {
  const [iconPostActive, setIconPostActive] = useState(true);
  const [iconContactActive, setIconContactActive] = useState(false);

  function handleActiveButtons() {
    setIconPostActive(!iconPostActive)
    setIconContactActive(!iconContactActive)
    if(iconContactActive) {
      console.log('volta para os Posts')
    }
    if(iconPostActive) {
      console.log('abrir o modal')
    }
  }

  return (
    <S.Container>
      <S.ButtonTab isActive={iconPostActive} onPress={handleActiveButtons}>
        <S.ImageIcon 
          source={iconPosts} 
          isActive={iconPostActive} 
        />
      </S.ButtonTab>
      <S.ButtonTab isActive={iconContactActive} onPress={handleActiveButtons}>
        <S.ImageIcon 
          source={iconContact} 
          isActive={iconContactActive} 
        />
      </S.ButtonTab>
    </S.Container>
  );
}