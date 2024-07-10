import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { getStoryListResponse, getStoryListURL } from '../../apis';
import { useAppToast } from '../../hooks/useAppToast';
import { NavigationProps } from '../../router';
import StoryListScreenView from './StoryListScreenView';

const StoryListScreenController = () => {
  const { toastError } = useAppToast();
  const [data, setData] = useState<getStoryListResponse>([]);
  const navigation = useNavigation<NavigationProps>();
  const [loading, setLoading] = useState<boolean>(false);

  const getData = async () => {
    try {
      setLoading(true);
      const rawRes = await fetch(getStoryListURL);
      const res = await rawRes.json();
      setData(res);
    } catch (error) {
      toastError(JSON.stringify(error));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!data.length) getData();
  }, [data]);

  return (
    <StoryListScreenView
      data={data}
      loading={loading}
      onRefresh={getData}
      navigation={navigation}
    />
  );
};

export default StoryListScreenController;
