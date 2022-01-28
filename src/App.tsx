import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';

import Navigation from './routes';
import store, { persistor } from './store';

import theme from '@styles/theme';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Navigation />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
