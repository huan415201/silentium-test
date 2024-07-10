import { useAppSelector } from '../../hooks';
import GlobalLoadingIndicatorView from './GlobalLoadingIndicatorView';

const GlobalLoadingIndicatorController = () => {
  const isLoading = useAppSelector(
    state => state.app.globalLoadingIndicator.isLoading,
  );

  return <GlobalLoadingIndicatorView isLoading={isLoading} />;
};

export default GlobalLoadingIndicatorController;
