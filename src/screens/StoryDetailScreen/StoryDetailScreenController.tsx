import { getStoryDetailResponse } from '../../apis/StoryDetail';
import StoryDetailScreenView from './StoryDetailScreenView';

const StoryDetailScreenController = ({
  route,
}: {
  route: { params: getStoryDetailResponse };
}) => {
  return <StoryDetailScreenView data={route.params} />;
};

export default StoryDetailScreenController;
