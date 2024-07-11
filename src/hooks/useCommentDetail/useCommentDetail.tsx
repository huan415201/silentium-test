import { useEffect, useState } from 'react';
import { getStoryDetailResponse, getStoryDetailURL } from '../../apis';
import { useAppToast } from '../useAppToast';

const useCommentDetail = (id: number) => {
  const [detail, setDetail] = useState<getStoryDetailResponse>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toastError } = useAppToast();

  const getData = async () => {
    try {
      setIsLoading(true);
      const rawRes = await fetch(getStoryDetailURL(id));
      const res: getStoryDetailResponse = await rawRes.json();
      if (res) {
        setDetail(res);
      } else {
        toastError(`Comment ${id} does not exist`);
      }
    } catch (error) {
      toastError(JSON.stringify(error));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  return { detail, isLoading };
};

export default useCommentDetail;
