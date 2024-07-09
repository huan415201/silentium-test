import React from 'react';
import { Provider } from 'react-redux';
import Navigator from './src/router';
import { store } from './src/states/store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}

export default App;
