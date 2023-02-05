import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { StateProvider } from './StateProvider.jsx';
import reducer, { initialState } from './reducer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StateProvider>,
);
