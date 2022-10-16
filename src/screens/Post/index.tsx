import React from 'react';
import { Header } from '../../components/Header';
import { Stars } from '../../components/Stars';
import { Tabbar } from '../../components/Tabbar';
import { CarouselSlides } from '../../components/CarouselSlides';

import * as S from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { PostsDTO } from '../../DTOs/postsDTO';

export function Post() {
  const img = []

  const navigation = useNavigation();
  const route = useRoute();
  const post = route.params as { post: PostsDTO };

  if(post) {
    for(let i=0; i<4; i++) {
      img.push({
        id: ''+i,
        img: post.post.imageUrl,
      })
    }
  }
  

  function GoBack() {
    navigation.goBack();
  }

  return (
    <S.Container>
      <Header 
        title="Post" 
        variant="withGoBack" 
        actionButton={GoBack} 
      />
      <S.ScrollViewContainer>
        <CarouselSlides imgSlides={img} />
        <S.Content>

          <S.Title>
            {post.post.title}
          </S.Title>
          
          <S.WrapperAuthor>
            <S.InfoAuthor>
              Posted by: <S.Author>{post.post.author}</S.Author>
            </S.InfoAuthor>
          </S.WrapperAuthor>

          <Stars />

          <S.Article>
            {post.post.article}
          </S.Article>
        </S.Content>
      </S.ScrollViewContainer>

      <Tabbar />
    </S.Container>
  );
}