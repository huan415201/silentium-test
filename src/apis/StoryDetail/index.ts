import { apiURL } from '../../utils';

export const getStoryDetailURL = (id: number) =>
  `${apiURL}item/${id}.json?print=pretty`;

export type getStoryDetailResponse = {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
};
