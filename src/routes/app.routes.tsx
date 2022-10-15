
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Posts } from '../screens/Posts';
import { Post } from '../screens/Post';

const { Navigator, Screen } = createStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Posts" component={Posts} />
      <Screen name="Post" component={Post} />
    </Navigator>
  )
}