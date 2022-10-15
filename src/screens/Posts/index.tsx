import React from 'react';
import { Header } from '../../components/Header';
import { PostCard } from '../../components/PostCard';

import * as S from './styles';
import { Tabbar } from '../../components/Tabbar';
import { FlatList } from 'react-native';

const arrayQ = [
  {
    id: '1',
    title: 'a'
  },
  {
    id: '2',
    title: 'b'
  },
  {
    id: '3',
    title: 'c'
  },
  {
    id: '4',
    title: 'd'
  }
]

export function Posts() {
  return (
    <S.Container>
      <Header 
        variant="withAddButton" 
        title="Posts"
        actionButton={() => console.log('vai executar a ação do botão')}
      />

      <FlatList 
        data={arrayQ}
        keyExtractor={item => item.id}
        renderItem={({ index }) => index % 2 === 0 ? <PostCard /> : <PostCard variant="imgRightSide" />}
        showsVerticalScrollIndicator={false}
      />

      <Tabbar />

    </S.Container>
  );
}