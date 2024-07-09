import { useAppSelector } from '../../hooks';
import HeaderView from './HeaderView';

const HeaderController = () => {
  const headerState = useAppSelector(state => state.app.header);

  return <HeaderView {...headerState} />;
};

export default HeaderController;
