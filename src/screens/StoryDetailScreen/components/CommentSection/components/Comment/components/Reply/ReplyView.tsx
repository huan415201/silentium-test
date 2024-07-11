import { FlatList, StyleSheet, View } from 'react-native';
import { colors } from '../../../../../../../../utils';
import CommentController from '../../CommentController';

const ReplyView = ({
  data,
  htmlWidth,
}: {
  data: number[];
  htmlWidth: number;
}) => (
  <View style={styles.replyWrapper}>
    <FlatList
      scrollEnabled={false}
      data={data}
      renderItem={({ item }: { item: number }) => (
        <CommentController id={item} htmlWidth={htmlWidth} />
      )}
      keyExtractor={item => `${item}`}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      initialNumToRender={3}
      maxToRenderPerBatch={3}
    />
  </View>
);

const styles = StyleSheet.create({
  replyWrapper: {
    marginTop: 10,
    borderLeftWidth: 1,
    borderLeftColor: colors.greyLine,
    paddingLeft: 12,
  },
  separator: {
    height: 20,
  },
});

export default ReplyView;
