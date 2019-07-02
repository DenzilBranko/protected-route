import React from 'react';
import ReactDOM from 'react-dom';
import { Provider }  from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk';

import reducers from './reducers'
import Routes from '../src/route/Route'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);



ReactDOM.render(
    <Provider store={ createStoreWithMiddleware(reducers)}>
        <Routes/>
    </Provider>,
     document.getElementById('root')
);