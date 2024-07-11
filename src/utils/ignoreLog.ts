import { LogBox } from 'react-native';

const LIBRARY_WARNINGS = [
  // react-native-render-html
  'TNodeChildrenRenderer',
  'MemoizedTNodeRenderer',
  'TRenderEngineProvider',
];

const ignoreLogs = () => {
  LogBox.ignoreLogs([...LIBRARY_WARNINGS]);
};

export default ignoreLogs;
