import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import React from 'react';
import { Provider } from 'react-redux';
import { Navigator } from './src/router';
import { store } from './src/states/store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <GluestackUIProvider config={config}>
        <Navigator />
      </GluestackUIProvider>
    </Provider>
  );
}

export default App;
