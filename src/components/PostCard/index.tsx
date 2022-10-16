import React from 'react';
import { View } from 'react-native';
import { Stars } from '../Stars';

import * as S from './styles';

type PostCardProps = {
  author: string
  title: string
  article: string
  imageUrl: string
  variant?: 'imgLeftSide' | 'imgRightSide'
  onPressAction: () => void
}

export function PostCard({ 
  author,
  title,
  article,
  imageUrl,
  variant = 'imgLeftSide',
  onPressAction
}: PostCardProps) {

  if(variant === 'imgLeftSide') {
    return (
      <S.Container onPress={onPressAction}>
        <S.ImagePost 
          source={{ uri: imageUrl }} 
        />
        <S.ContentPost>
          <View>
            <S.Author>{author}</S.Author>
            <S.TitlePost numberOfLines={2}>{title}</S.TitlePost>
            <S.ArticlePost numberOfLines={3}>{article}</S.ArticlePost>
          </View>
          <Stars />
        </S.ContentPost>
      </S.Container>
    );
  } else {
    return (
      <S.Container onPress={onPressAction} isRightSide={true}>
        <S.ContentPost>
          <View>
            <S.Author>{author}</S.Author>
            <S.TitlePost numberOfLines={2}>{title}</S.TitlePost>
            <S.ArticlePost numberOfLines={3}>{article}</S.ArticlePost>
          </View>
          <Stars />
        </S.ContentPost>
        <S.ImagePost 
          source={{ uri: imageUrl }} 
        />
      </S.Container>
    );
  }
  
}