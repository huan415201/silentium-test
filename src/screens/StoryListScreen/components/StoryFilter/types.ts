import { Dispatch } from 'react';
import { FILTER_KEYS } from '../../types';

export type StoryFilterViewProps = {
  filter: FILTER_KEYS;
  setFilter: Dispatch<React.SetStateAction<FILTER_KEYS>>;
};
