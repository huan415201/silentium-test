import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useAppDispatch } from '../hooks';
import { StoryDetailScreen, StoryListScreen } from '../screens';
import { setHeaderAction } from '../states/reducers';
import { StoryDetailScreenName, StoryListScreenName } from './screenNames';

type ScreenParamList = {
  StoryListScreenName: undefined;
  StoryDetailScreenName: undefined;
};

const Stack = createNativeStackNavigator<ScreenParamList>();

const Navigator = () => {
  const dispatch = useAppDispatch();

  const onChangeScreen = (routeName: string) => {
    switch (routeName) {
      case StoryListScreenName:
        dispatch(
          setHeaderAction({
            visible: true,
            title: 'Story List',
            showBackButton: false,
          }),
        );
      default:
        break;
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        screenListeners={{
          state: event => {
            const route = event.data.state.routes[event.data.state.index];
            onChangeScreen(route.name);
          },
        }}>
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
