import React, { 
  createContext, 
  ReactNode, 
  useContext, 
  useState,
  useEffect,
  useCallback,
} from 'react';
import uuid from 'react-native-uuid';

import api from '../services/api';
import { PostsDTO } from '../DTOs/postsDTO';

interface PostsContextProviderProps {
  children: ReactNode;
}

interface IPostsContextData {
  posts: PostsDTO[]
  isLoading: boolean
  AddNewPost: (newPost: Omit<PostsDTO, "id">) => void
  UpdateStars: (idPost: string, starsAmount: number) => void
}

const PostsContext = createContext({} as IPostsContextData);

function PostsContextProvider({ children }:PostsContextProviderProps) {
  const [posts, setPosts] = useState<PostsDTO[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const AddNewPost = useCallback((newPost: Omit<PostsDTO, "id">) => {
    setIsLoading(true)
    const allPosts = [...posts];
    
    const newPostForAdd = {
      id: uuid.v4().toString(),
      title: newPost.title,
      author: newPost.author,
      imageUrl: newPost.imageUrl,
      article: newPost.article,
    } as PostsDTO

    allPosts.unshift(newPostForAdd)

    setPosts(allPosts)
    setIsLoading(false)
  },[posts])

  const UpdateStars = useCallback((idPost: string,  starsAmount: number) => {
    setIsLoading(true)
    const postExists = posts.find((post) => post.id === idPost)

    if(postExists) {
      postExists.stars = starsAmount;
    }

    setPosts(posts)
    setIsLoading(false)
  },[posts])

  useEffect(() => {
    async function fetchPosts() {
      setIsLoading(true)
      const postsData = await api.get('/articles?_limit=20')
      setPosts(postsData.data)
      setIsLoading(false)
    }

    fetchPosts()
  }, [])

  return (
    <PostsContext.Provider value={{ 
      posts,
      isLoading,
      AddNewPost,
      UpdateStars,
    }}>
      {children}
    </PostsContext.Provider>
  )

}

function usePostsContext() {
  const context = useContext(PostsContext);

  return context;
}

export { PostsContextProvider, usePostsContext };