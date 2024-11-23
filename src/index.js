import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 리덕스를 추가하는 로직
import {legacy_createStore as createStore} from 'redux'
import {devToolsEnhancer} from 'redux-devtools-extension'
import {Provider} from 'react-redux'
import route from './routes/modules/route';

import {BrowserRouter, Route} from 'react-router-dom'
import { RouteProvider } from './context/RouteContext';

const store =createStore(route, devToolsEnhancer())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <BrowserRouter> */}
      <Provider store={store}>
        <App />
      </Provider>
    {/* </BrowserRouter> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
