import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import {
  getBestStoryListURL,
  getNewStoryListURL,
  getStoryListResponse,
  getTopStoryListURL,
} from '../../apis';
import { useAppToast } from '../../hooks';
import { NavigationProps } from '../../router';
import StoryListScreenView from './StoryListScreenView';
import { FILTER_KEYS } from './types';

const StoryListScreenController = () => {
  const { toastError } = useAppToast();
  const navigation = useNavigation<NavigationProps>();
  const [loading, setLoading] = useState<boolean>(false);
  const [newData, setNewData] = useState<getStoryListResponse>([]);
  const [topData, setTopData] = useState<getStoryListResponse>([]);
  const [bestData, setBestData] = useState<getStoryListResponse>([]);
  const [filterType, setFilterType] = useState<FILTER_KEYS>(FILTER_KEYS.new);

  const getData = async () => {
    try {
      setLoading(true);
      let url = getNewStoryListURL;
      let setter = setNewData;
      switch (filterType) {
        case FILTER_KEYS.new:
          if (newData.length) return;
          url = getNewStoryListURL;
          setter = setNewData;
          break;
        case FILTER_KEYS.top:
          if (topData.length) return;
          url = getTopStoryListURL;
          setter = setTopData;
          break;
        case FILTER_KEYS.best:
          if (bestData.length) return;
          url = getBestStoryListURL;
          setter = setBestData;
          break;
      }
      const rawRes = await fetch(url);
      const res = await rawRes.json();
      setter(res);
    } catch (error) {
      toastError(JSON.stringify(error));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [filterType]);

  return (
    <StoryListScreenView
      data={
        filterType === FILTER_KEYS.new
          ? newData
          : filterType === FILTER_KEYS.top
          ? topData
          : bestData
      }
      loading={loading}
      onRefresh={getData}
      navigation={navigation}
      filter={filterType}
      setFilter={setFilterType}
    />
  );
};

export default StoryListScreenController;
