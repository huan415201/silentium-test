import { FILTER_KEYS } from '../../types';

export type StoryFilterViewProps = {
  filter: FILTER_KEYS;
  setFilter: (value: FILTER_KEYS) => void;
};
