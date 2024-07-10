import { apiURL } from '../../utils';

export const getStoryListURL = `${apiURL}topstories.json?print=pretty`;

export type getStoryListResponse = number[];
