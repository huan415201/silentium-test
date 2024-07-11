import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Comment } from './components';

const CommentSectionView = ({
  ids,
  htmlWidth,
}: {
  ids: number[];
  htmlWidth: number;
}) => (
  <View style={styles.container}>
    <Text style={styles.title}>Comments</Text>
    {ids?.length > 0 ? (
      <FlatList
        scrollEnabled={false}
        data={ids}
        renderItem={({ item }: { item: number }) => (
          <Comment id={item} htmlWidth={htmlWidth} />
        )}
        keyExtractor={item => `${item}`}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        initialNumToRender={5}
        maxToRenderPerBatch={5}
      />
    ) : (
      <Text>No comment</Text>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  separator: {
    height: 20,
  },
});

export default CommentSectionView;
