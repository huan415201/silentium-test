import StoryFilterView from './StoryFilterView';
import { StoryFilterViewProps } from './types';

const StoryFilterController = (props: StoryFilterViewProps) => {
  return <StoryFilterView {...props} />;
};

export default StoryFilterController;
