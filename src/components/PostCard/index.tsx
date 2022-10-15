import React from 'react';
import { View } from 'react-native';
import { Stars } from '../Stars';

import * as S from './styles';

type PostCardProps = {
  variant?: 'imgLeftSide' | 'imgRightSide'
}

export function PostCard({ variant = 'imgLeftSide' }: PostCardProps) {
  if(variant === 'imgLeftSide') {
    return (
      <S.Container>
        <S.ImagePost 
          source={{ uri: "https://source.unsplash.com/640x640/?trees" }} 
        />
        <S.ContentPost>
          <View>
            <S.Author>Rafael Quartaroli</S.Author>
            <S.TitlePost>Bora terminar esse teste aqui</S.TitlePost>
            <S.ArticlePost>skldfjnmklwsjfs apdjkopajkdfap sdfhiwjfpwej</S.ArticlePost>
          </View>
          <Stars />
        </S.ContentPost>
      </S.Container>
    );
  } else {
    return (
      <S.Container isRightSide={true}>
        <S.ContentPost>
          <View>
            <S.Author>Rafael Quartaroli</S.Author>
            <S.TitlePost>Bora terminar esse teste aqui</S.TitlePost>
            <S.ArticlePost>skldfjnmklwsjfs apdjkopajkdfap sdfhiwjfpwej</S.ArticlePost>
          </View>
          <Stars />
        </S.ContentPost>
        <S.ImagePost 
          source={{ uri: "https://source.unsplash.com/640x640/?trees" }} 
        />
      </S.Container>
    );
  }
  
}