import React from 'react';
import { StatusBar } from 'react-native';
import { 
  useFonts,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_700Bold,
} from '@expo-google-fonts/rubik';
import { Roboto_500Medium } from '@expo-google-fonts/roboto';
import { ThemeProvider } from 'styled-components/native';

import { THEME } from './src/theme';
import { Routes } from './src/routes';
import { PostsContextProvider } from './src/hooks/postsContext';

export default function App() {
  const [fontsLoaded] = useFonts({
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_700Bold,
    Roboto_500Medium
  })

  if(!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={THEME}>
      <StatusBar 
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <PostsContextProvider>
        <Routes />
      </PostsContextProvider>
    </ThemeProvider>
  );
}
