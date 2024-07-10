import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../../../utils';
import { FILTER_KEYS } from '../../types';
import { StoryFilterViewProps } from './types';

const filterValues = Object.values(FILTER_KEYS);

const StoryFilterView = ({ filter, setFilter }: StoryFilterViewProps) => (
  <View style={styles.filterWrapper}>
    {filterValues.map((item, index) => {
      const isLast = index === filterValues.length - 1;
      const isSelected = item === filter;
      return (
        <TouchableOpacity
          key={item}
          onPress={() => setFilter(item)}
          style={[
            styles.filterBtn,
            !isLast && styles.filterBtnSpacing,
            isSelected && styles.activeFilter,
          ]}>
          <Text
            numberOfLines={1}
            style={[styles.btnText, isSelected && styles.activeFIlterText]}>
            {item} Stories
          </Text>
        </TouchableOpacity>
      );
    })}
  </View>
);

const styles = StyleSheet.create({
  filterWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  filterBtn: {
    flex: 1,
    paddingVertical: 12,
    backgroundColor: colors.white,
    borderRadius: 4,
  },
  filterBtnSpacing: {
    marginRight: 12,
  },
  activeFilter: {
    backgroundColor: colors.blue,
  },
  activeFIlterText: {
    color: colors.white,
    fontWeight: '500',
  },
  btnText: {
    textAlign: 'center',
  },
});

export default StoryFilterView;
