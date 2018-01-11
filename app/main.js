import React from 'react';
import ReactDom from 'react-dom';
import HelloComponent from './components/hello.jsx';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';

import demoApp from './reducers/reducer'

let store = createStore(demoApp,
   applyMiddleware(thunk));

ReactDom.render(
    <Provider store={store}>
      <HelloComponent />
    </Provider>,
    document.getElementById('content')
);

