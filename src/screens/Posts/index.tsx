import React from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as S from './styles';

import { usePostsContext } from '../../hooks/postsContext';
import { PostCard } from '../../components/PostCard';
import { Header } from '../../components/Header';
import { Tabbar } from '../../components/Tabbar';
import { PostsDTO } from '../../DTOs/postsDTO';
import { Loading } from '../../components/Loading';

export function Posts() {
  const { posts, isLoading } = usePostsContext();

  const navigation = useNavigation();

  function handleOpenArticle(post: PostsDTO) {
    navigation.navigate('Post', { post });
  }

  function handleOpenCreatePost() {
    navigation.navigate('CreatePost');
  }

  if(isLoading) {
    return <Loading />
  }

  return (
    <S.Container>
      <Header 
        variant="withAddButton" 
        title="Posts"
        actionButton={handleOpenCreatePost}
      />

      <FlatList 
        data={posts}
        extraData={posts}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => index % 2 === 0 
          ? <PostCard 
              author={item.author}
              title={item.title}
              article={item.article}
              imageUrl={item.imageUrl}
              onPressAction={() => handleOpenArticle(item)}
              starsAmount={item.stars ? item.stars : 0}
              idPost={item.id}
            /> 
          : <PostCard 
              author={item.author}
              title={item.title}
              article={item.article}
              imageUrl={item.imageUrl}
              variant="imgRightSide" 
              onPressAction={() => handleOpenArticle(item)}
              starsAmount={item.stars ? item.stars : 0}
              idPost={item.id}
            />
          }
      />

      <Tabbar />

    </S.Container>
  );
}