import { useCommentDetail } from '../../../../../../hooks';
import CommentView from './CommentView';

const CommentController = ({
  id,
  htmlWidth,
}: {
  id: number;
  htmlWidth: number;
}) => {
  const { detail: data, isLoading } = useCommentDetail(id);
  return (
    <CommentView data={data} htmlWidth={htmlWidth} isLoading={isLoading} />
  );
};

export default CommentController;
