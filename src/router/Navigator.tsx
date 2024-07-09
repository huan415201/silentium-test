import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StoryDetailScreen, StoryListScreen } from '../screens';
import { StoryDetailScreenName, StoryListScreenName } from './screenNames';

type ScreenParamList = {
  StoryListScreenName: undefined;
  StoryDetailScreenName: undefined;
};

const Stack = createNativeStackNavigator<ScreenParamList>();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={StoryListScreenName} component={StoryListScreen} />
        <Stack.Screen
          name={StoryDetailScreenName}
          component={StoryDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
