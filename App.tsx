import React from 'react';
import { Text, View } from 'react-native';
import { 
  useFonts,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_700Bold,
} from '@expo-google-fonts/rubik';
import { Roboto_500Medium } from '@expo-google-fonts/roboto';
import { ThemeProvider } from 'styled-components/native';

import { THEME } from './src/theme';

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
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Hello World!</Text>
      </View>
    </ThemeProvider>
  );
}
