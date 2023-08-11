import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import 'unfonts.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store, persistor } from './store/store.ts';
import { PersistGate } from 'redux-persist/integration/react';

import { GlobalStyles } from './assets/styles';



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <React.StrictMode>
      <GlobalStyles />

      <BrowserRouter basename="/plan-front">
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>    
      </BrowserRouter>

    </React.StrictMode>
  </Provider>
)
