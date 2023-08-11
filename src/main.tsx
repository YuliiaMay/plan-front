import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import 'unfonts.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store, persistor } from './store/store.ts';
import { PersistGate } from 'redux-persist/integration/react';

// import { FontStyles } from './assets/fonts/FontStyles.ts';
import { GlobalStyles } from './assets/styles/GlobalStyles.ts';

// import FontStyles from "./assets/styles/FontStyles.js"

// import './assets/fonts/Barriecito/Barriecito-Regular.ttf';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <React.StrictMode>
      <GlobalStyles />
      {/* <FontStyles /> */}
      <BrowserRouter basename="/plan-front">
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>    
      </BrowserRouter>

    </React.StrictMode>
  </Provider>
)
