import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from "react-router-dom"
import {Provider} from "react-redux"
import store from "./redux/store"
import Main from "./components/Main/Main"
import "../src/assets/css/reset.css"
import "./assets/css/app.f434645034a6fa4bfecc0fa3c93f6fbf.css"
import "./mock/mockServer"

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Main />
    </HashRouter>
  </Provider>, document.getElementById('app'));
