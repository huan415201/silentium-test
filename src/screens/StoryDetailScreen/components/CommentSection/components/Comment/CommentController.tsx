import { useCommentDetail } from '../../../../../../hooks';
import CommentView from './CommentView';

const CommentController = ({
  id,
  htmlWidth,
}: {
  id: number;
  htmlWidth: number;
}) => {
  const data = useCommentDetail(id);
  return <CommentView data={data} htmlWidth={htmlWidth} />;
};

export default CommentController;
