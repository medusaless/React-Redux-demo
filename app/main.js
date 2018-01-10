import React from 'react';
import ReactDom from 'react-dom';
import HelloComponent from './components/hello.jsx';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import demoApp from './reducers/reducer'

let store = createStore(demoApp)

ReactDom.render(
    <Provider store={store}>
      <HelloComponent />
    </Provider>,
    document.getElementById('content')
);

