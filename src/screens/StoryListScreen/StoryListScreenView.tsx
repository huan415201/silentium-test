import { Dispatch } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { getStoryListResponse } from '../../apis';
import { ScreenWrapper } from '../../layout';
import { NavigationProps } from '../../router';
import { StoryFilter, StoryItem } from './components';
import { FILTER_KEYS } from './types';

type StoryListScreenViewProps = {
  data: getStoryListResponse;
  loading: boolean;
  onRefresh: () => void;
  navigation: NavigationProps;
  filter: FILTER_KEYS;
  setFilter: Dispatch<React.SetStateAction<FILTER_KEYS>>;
};

const StoryListScreenView = ({
  data,
  loading,
  onRefresh,
  navigation,
  filter,
  setFilter,
}: StoryListScreenViewProps) => (
  <ScreenWrapper>
    <StoryFilter filter={filter} setFilter={setFilter} />
    <FlatList
      data={data}
      renderItem={({ item, index }) => (
        <StoryItem item={item} index={index} navigation={navigation} />
      )}
      keyExtractor={item => `${item}`}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      contentContainerStyle={styles.list}
      onRefresh={onRefresh}
      refreshing={loading}
      initialNumToRender={12}
      maxToRenderPerBatch={12}
    />
  </ScreenWrapper>
);

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 16,
  },
  separator: {
    height: 16,
  },
});

export default StoryListScreenView;
