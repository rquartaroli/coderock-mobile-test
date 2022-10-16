import React from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as S from './styles';

import { usePostsContext } from '../../hooks/postsContext';
import { PostCard } from '../../components/PostCard';
import { Header } from '../../components/Header';
import { Tabbar } from '../../components/Tabbar';
import { PostsDTO } from '../../DTOs/postsDTO';

export function Posts() {
  const { posts } = usePostsContext();

  const navigation = useNavigation();

  function handleOpenArticle(post: PostsDTO) {
    navigation.navigate('Post', { post });
  }

  return (
    <S.Container>
      <Header 
        variant="withAddButton" 
        title="Posts"
        actionButton={() => console.log('vai executar a ação do botão')}
      />

      <FlatList 
        data={posts}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => index % 2 === 0 
          ? <PostCard 
              author={item.author}
              title={item.title}
              article={item.article}
              imageUrl={item.imageUrl}
              onPressAction={() => handleOpenArticle(item)}
            /> 
          : <PostCard 
              author={item.author}
              title={item.title}
              article={item.article}
              imageUrl={item.imageUrl}
              variant="imgRightSide" 
              onPressAction={() => handleOpenArticle(item)}
            />
          }
        // showsVerticalScrollIndicator={false}
      />

      <Tabbar />

    </S.Container>
  );
}