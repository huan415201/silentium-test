import ReplyView from './ReplyView';

const ReplyController = (props: { data: number[]; htmlWidth: number }) => {
  return <ReplyView {...props} />;
};

export default ReplyController;
