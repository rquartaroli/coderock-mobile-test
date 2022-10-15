import React from 'react';
import { Text } from 'react-native';
import { Header } from '../../components/Header';

import * as S from './styles';

export function Post() {
  return (
    <S.Container>
      <Header 
        title="Post" 
        variant="withGoBack" 
        actionButton={() => console.log('vai voltar a página anterior')} 
      />
      <Text>Post</Text>
    </S.Container>
  );
}