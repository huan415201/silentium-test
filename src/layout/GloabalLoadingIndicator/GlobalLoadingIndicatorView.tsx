import { ActivityIndicator, Dimensions, StyleSheet, View } from 'react-native';
import { colors } from '../../utils';

const GlobalLoadingIndicatorView = ({ isLoading }: { isLoading: boolean }) =>
  isLoading ? (
    <View style={styles.container}>
      <ActivityIndicator color={colors.white} size="large" />
    </View>
  ) : null;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
});

export default GlobalLoadingIndicatorView;
