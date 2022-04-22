import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createRoot} from 'react-dom/client';
// Redux
import store from './app/store'
import { Provider } from 'react-redux'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Provider store={ store }>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
  