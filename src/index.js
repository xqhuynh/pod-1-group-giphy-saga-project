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
function* watcherSaga() {

}

// Reducer that holds our results
const search = (state = {}, action) => {
    if (action.type === 'SET_SEARCH') {
        return action.payload;
    }
    return state;
}
// Saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create store
const store = createStore(
    combineReducers({
        search
    }),
    applyMiddleware(sagaMiddleware, logger)
);


// Run saga middleware
sagaMiddleware.run(watcherSaga);

ReactDOM.render
    (
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
    );