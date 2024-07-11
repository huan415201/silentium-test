import { useWindowDimensions } from 'react-native';
import { getStoryDetailResponse } from '../../apis/StoryDetail';
import StoryDetailScreenView from './StoryDetailScreenView';

const StoryDetailScreenController = ({
  route,
}: {
  route: { params: getStoryDetailResponse };
}) => {
  const { width } = useWindowDimensions();
  return <StoryDetailScreenView data={route.params} htmlWidth={width} />;
};

export default StoryDetailScreenController;
