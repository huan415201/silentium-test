import { FC } from 'react';
import ScreenWrapperView from './ScreenWrapperView';
import { ScreenWrapperProps } from './types';

const ScreenWrapperController: FC<ScreenWrapperProps> = props => {
  return <ScreenWrapperView {...props} />;
};

export default ScreenWrapperController;
