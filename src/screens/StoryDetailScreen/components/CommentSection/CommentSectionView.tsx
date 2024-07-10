import { StyleSheet, Text, View } from 'react-native';

const CommentSectionView = ({ data }: { data: number[] }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Comments</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 16,
  },
});

export default CommentSectionView;
