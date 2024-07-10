import { FC } from 'react';
import {
  getStoryDetailResponse,
  getStoryDetailURL,
} from '../../../../apis/StoryDetail';
import { useAppToast } from '../../../../hooks/useAppToast';
import { NavigationProps } from '../../../../router';
import StoryItemView from './StoryItemView';
import { useAppDispatch } from '../../../../hooks';
import { setGlobalLoadingAction } from '../../../../states/reducers';

type StoryItemControllerProps = {
  item: number;
  index: number;
  navigation: NavigationProps;
};

const StoryItemController: FC<StoryItemControllerProps> = ({
  item,
  index,
  navigation,
}) => {
  const { toastError } = useAppToast();
  const dispatch = useAppDispatch();

  const onPress = async (item: number) => {
    try {
      dispatch(setGlobalLoadingAction({ isLoading: true }));
      const rawRes = await fetch(getStoryDetailURL(item));
      const res: getStoryDetailResponse = await rawRes.json();
      if (res) {
        navigation.navigate('StoryDetailScreenName', res);
      } else {
        toastError(`Story ${item} is not exist`);
      }
    } catch (error) {
      toastError(JSON.stringify(error));
    } finally {
      dispatch(setGlobalLoadingAction({ isLoading: false }));
    }
  };

  return <StoryItemView item={item} index={index} onPress={onPress} />;
};

export default StoryItemController;
