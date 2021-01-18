import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import DefaultLayout from './layout/DefaultLayout.jsx';
import history from './util/history';

import myReducer from './redux/reducers/index.reducer';
import mySaga from './redux/sagas/index.saga';

import Home from './pages/Home/index'
import Auth from './pages/Auth/index.jsx'
import Product from './pages/Product/index.jsx'
import ProductOther from './pages/ProductOther/index.jsx'
import Introduce from './pages/Introduce/index.jsx';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';

const sagaMiddleware = createSagaMiddleware();
const myStore = createStore(myReducer, applyMiddleware(...[sagaMiddleware, logger]));
sagaMiddleware.run(mySaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore} >
      <Router history={history}>
        <Switch>
          <DefaultLayout exact path="/" component={Home} />
          <DefaultLayout exact path="/gioithieu" component={Introduce} />
          <DefaultLayout exact path="/auth" component={Auth} />
          <DefaultLayout exact path="/sanpham" component={Product} />
          <DefaultLayout exact path="/sanphamkhac" component={ProductOther} />
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
