import React from 'react';
import { Header } from '../../components/Header';
import { Stars } from '../../components/Stars';

import * as S from './styles';

export function Posts() {
  return (
    <S.Container>
      <Header 
        variant="withAddButton" 
        title="Posts"
        actionButton={() => console.log('vai executar a ação do botão')}
      />
      <Stars />
    </S.Container>
  );
}