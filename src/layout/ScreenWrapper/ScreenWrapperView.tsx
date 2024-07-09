import { FC } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../../components';
import { ScreenWrapperProps } from './types';

const ScreenWrapperView: FC<ScreenWrapperProps> = ({ children }) => (
  <SafeAreaView edges={['bottom']} style={styles.container}>
    <Header />
    {children}
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default ScreenWrapperView;
