import CommentSectionView from './CommentSectionView';

const CommentSectionController = ({
  ids,
  htmlWidth,
}: {
  ids: number[];
  htmlWidth: number;
}) => {
  return <CommentSectionView ids={ids} htmlWidth={htmlWidth} />;
};

export default CommentSectionController;
