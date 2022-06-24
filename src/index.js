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



// Reducer that holds our results
const search = (state = {}, action) => {
    if (action.type === 'SET_SEARCH') {
        return action.payload;
    }
    return state;
}

// Reducer that holds favorites
const favorites = (state = {}, action) => {
    switch(action.type){
        case 'SET_FAVORITES':
            return action.payload
    }
    return state;
}

function* getFavoriteGifs(action) {
    let res;
    try{
        res = yield axios.get('/api/favorite')
    }
    catch{
        console.log('Failed to get Gifs', error)
    }
    yield put({
        type:'SET_FAVORITES',
        payload: res.data
    })
}


// watchersaga function*, will watch for actions
function* watcherSaga() {
    yield takeEvery('GET_FAVORITE_GIFS', getFavoriteGifs)
}

// Saga middleware
const sagaMiddleware = createSagaMiddleware();




// Create store
const store = createStore(
    combineReducers({
        search,
        favorites,
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