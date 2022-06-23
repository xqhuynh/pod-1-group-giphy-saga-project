import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// import saga middleware from redux-saga
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import logger from 'redux-logger';
import axios from 'axios';

// watchersaga function*, will watch for actions
function watcherSaga() {

}

// Create store
const store = createStore(
    combineReducers({
    }),
    applyMiddleware(sagaMiddleware, logger)
)

// Saga middleware
const sagaMiddleware = createSagaMiddleware;

// Run saga middleware
sagaMiddleware.arguments(watcherSaga);

ReactDOM.render
    (
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
    );