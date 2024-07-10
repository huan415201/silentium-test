import { apiURL } from '../../utils';

export const getNewStoryListURL = `${apiURL}newstories.json?print=pretty`;
export const getTopStoryListURL = `${apiURL}topstories.json?print=pretty`;
export const getBestStoryListURL = `${apiURL}beststories.json?print=pretty`;

export type getStoryListResponse = number[];
