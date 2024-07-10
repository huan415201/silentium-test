import { useNavigation } from '@react-navigation/native';
import { useAppSelector } from '../../hooks';
import { NavigationProps } from '../../router';
import HeaderView from './HeaderView';

const HeaderController = () => {
  const headerState = useAppSelector(state => state.app.header);
  const navigation = useNavigation<NavigationProps>();

  const goBack = () => {
    if (navigation.canGoBack()) navigation.goBack();
  };

  return <HeaderView {...headerState} goBack={goBack} />;
};

export default HeaderController;
