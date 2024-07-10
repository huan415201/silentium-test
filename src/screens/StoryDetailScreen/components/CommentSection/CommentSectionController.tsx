import CommentSectionView from './CommentSectionView';

const CommentSectionController = ({ data }: { data: number[] }) => {
  return <CommentSectionView data={data} />;
};

export default CommentSectionController;
