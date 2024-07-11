import { useEffect, useState } from 'react';
import { getStoryDetailResponse, getStoryDetailURL } from '../../apis';
import { useAppToast } from '../useAppToast';

const useCommentDetail = (id: number) => {
  const [detail, setDetail] = useState<getStoryDetailResponse>();
  const { toastError } = useAppToast();

  const getData = async () => {
    try {
      const rawRes = await fetch(getStoryDetailURL(id));
      const res: getStoryDetailResponse = await rawRes.json();
      if (res) {
        setDetail(res);
      } else {
        toastError(`Comment ${id} does not exist`);
      }
    } catch (error) {
      toastError(JSON.stringify(error));
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  return detail;
};

export default useCommentDetail;
