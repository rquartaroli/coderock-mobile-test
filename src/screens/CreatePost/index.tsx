import React, { useRef } from 'react';
import { Keyboard, TouchableWithoutFeedback, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { useTheme } from 'styled-components';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Header } from '../../components/Header';
import { FormData, Input } from '../../components/Input';

import * as S from './styles';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Tabbar } from '../../components/Tabbar';
import { usePostsContext } from '../../hooks/postsContext';
import { PostsDTO } from '../../DTOs/postsDTO';

const schema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  author: Yup.string().required('Author is required'),
  imageUrl: Yup.string().required('ImageUrl is required'),
  post: Yup.string().required('Post is required'),
})

export function CreatePost() {
  const THEME = useTheme();

  const navigation = useNavigation();

  const { AddNewPost } = usePostsContext();

  const refAuthor = useRef<any>();
  const refImageUrl = useRef<any>();
  const refPost = useRef<any>();

  const { 
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>({ 
    resolver: yupResolver(schema) 
  })

  function handleCreateNewPost(form: FormData) {
    const newPost = {
      title: form.title,
      author: form.author,
      imageUrl: form.imageUrl,
      article: form.post,
    } as Omit<PostsDTO, "id">

    AddNewPost(newPost)
    reset()
    Alert.alert("New Post", "Post create with success.")
    navigation.goBack();
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <S.Container>
        <Header title="New Post" variant="onlyTitle" actionButton={() => {}} />

        <S.Content
          showsVerticalScrollIndicator={false} 
          contentContainerStyle={{ paddingBottom: 32 }}
        >
          <Input 
            name="title"
            control={control}
            title="Title"
            placeholder="Fill the title"
            returnKeyType="next"
            onSubmitEditing={() => refAuthor.current.focus()}
            error={errors.title && errors.title.message}
          />
          <Input 
            name="author"
            control={control}
            title="Author"
            placeholder="Fill the author name"
            returnKeyType="next"
            onSubmitEditing={() => refImageUrl.current.focus()}
            isRef={refAuthor}
            error={errors.author && errors.author.message}
          />
          <Input 
            name="imageUrl"
            control={control}
            title="Image URL"
            placeholder="Fill the image URL"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
            onSubmitEditing={() => refPost.current.focus()}
            isRef={refImageUrl}
            error={errors.imageUrl && errors.imageUrl.message}
          />
          <Input 
            name="post"
            control={control}
            title="Post"
            placeholder="Awesome Post...."
            multiline={true}
            numberOfLines={8}
            isRef={refPost}
            style={{ textAlignVertical: 'top' }}
            error={errors.post && errors.post.message}
          />

          <S.WrapperButtonModal>
            <ButtonIcon 
              title="Create Post" 
              typeIcon="createPost" 
              colorValue={THEME.COLORS.GRAY_DARK}
              onPress={handleSubmit(handleCreateNewPost)} 
            />
          </S.WrapperButtonModal>

        </S.Content>
        <Tabbar />
      </S.Container>
    </TouchableWithoutFeedback>
  );
}