import { NavigationContainer, NavigationProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { getStoryDetailResponse } from '../apis/StoryDetail';
import { useAppDispatch } from '../hooks';
import { StoryDetailScreen, StoryListScreen } from '../screens';
import { setHeaderAction } from '../states/reducers';
import { StoryDetailScreenName, StoryListScreenName } from './screenNames';

type ScreenParamList = {
  StoryListScreenName: undefined;
  StoryDetailScreenName: getStoryDetailResponse;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends ScreenParamList {}
  }
}

export type NavigationProps = NavigationProp<ScreenParamList>;

const Stack = createNativeStackNavigator<ScreenParamList>();

const Navigator = () => {
  const dispatch = useAppDispatch();

  const onChangeScreen = (routeName: string) => {
    console.log('routeName:::', routeName);
    switch (routeName) {
      case StoryListScreenName:
        dispatch(
          setHeaderAction({
            visible: true,
            title: 'Story List',
            showBackButton: false,
          }),
        );
        break;
      case StoryDetailScreenName:
        dispatch(
          setHeaderAction({
            visible: true,
            title: 'Story Detail',
            showBackButton: true,
          }),
        );
        break;
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
