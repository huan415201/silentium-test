import { FlatList, StyleSheet, View } from 'react-native';
import { getStoryListResponse } from '../../apis';
import { ScreenWrapper } from '../../layout';
import { NavigationProps } from '../../router';
import { StoryItem } from './components';

type StoryListScreenViewProps = {
  data: getStoryListResponse;
  loading: boolean;
  onRefresh: () => void;
  navigation: NavigationProps;
};

const StoryListScreenView = ({
  data,
  loading,
  onRefresh,
  navigation,
}: StoryListScreenViewProps) => (
  <ScreenWrapper>
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
