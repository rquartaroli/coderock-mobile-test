import React, { 
  createContext, 
  ReactNode, 
  useContext, 
  useState,
  useEffect,
} from 'react';
import api from '../services/api';
import { PostsDTO } from '../DTOs/postsDTO';

interface PostsContextProviderProps {
  children: ReactNode;
}

interface IPostsContextData {
  posts: PostsDTO[]
}

const PostsContext = createContext({} as IPostsContextData);

function PostsContextProvider({ children }:PostsContextProviderProps) {
  const [posts, setPosts] = useState<PostsDTO[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const postsData = await api.get('/articles?_limit=20')
      setPosts(postsData.data)
    }

    fetchPosts()
  }, [])

  return (
    <PostsContext.Provider value={{ 
      posts,
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