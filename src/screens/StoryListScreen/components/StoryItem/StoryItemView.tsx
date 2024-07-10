import { FC, memo } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors } from '../../../../utils';

type StoryItemViewProps = {
  item: number;
  index: number;
  onPress: (item: number) => void;
};

const StoryItemView: FC<StoryItemViewProps> = ({ item, index, onPress }) => (
  <TouchableOpacity
    onPress={() => onPress(item)}
    activeOpacity={1}
    style={styles.itemContainer}>
    <Text style={styles.name}>{`${index + 1}. ${item}`}</Text>
    <Text style={styles.detailText}>{`View detail >`}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  itemContainer: {
    borderWidth: 1,
    borderColor: colors.greyBackground,
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 16,
  },
  name: {
    fontSize: 14,
    lineHeight: 21,
  },
  detailText: {
    textAlign: 'right',
    fontSize: 12,
    lineHeight: 18,
  },
});

export default memo(StoryItemView);
