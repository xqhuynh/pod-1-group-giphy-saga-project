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

// Function to fetch giphy's 
function* fetchGif(action) {     // STEP 3 ------------
    console.log('made it to fetch elements');
    console.log('action', action);

    const res = yield axios.get('/api/search');
    console.log('response is', res.data);

    yield put({
        type: 'SET_ELEMENTS',
        payload: res.data
    })
}

// Generator function to fetch results
// payload is user input in search box 
function* fetchResults(action) {
    try {
        console.log("Payload is search keyword:", action.payload);
        let searchTerm = action.payload;
        const response = yield axios.get(`/api/search/${searchTerm}`);
        //sends results to search reducer below
        yield put({ type: "SET_RESULTS", payload: response.data.data });
    } catch (err) {
        console.log(err);
        put({ type: "ERROR" });
    }
}

// Reducer that holds our results w/ 'SET_RESULTS' dispatch action
// gets payload from fetchResults generator function
const search = (state = [], action) => {
    switch (action.type) {
        case 'SET_RESULTS':
            return action.payload
        default:
            return state
    }
}

// Reducer that holds favorites
const favorites = (state = {}, action) => {
    switch (action.type) {
        case 'SET_FAVORITES':
            return action.payload
    }
    return state;
}

function* getFavoriteGifs(action) {
    let res;
    try {
        res = yield axios.get('/api/favorite')
    }
    catch {
        console.log('Failed to get Gifs', error)
    }
    yield put({
        type: 'SET_FAVORITES',
        payload: res.data
    })
}

function* addFavorite(action) {
    console.log('in addFavorites', action.payload);
    yield axios({
        method: 'POST',
        url: 'api/favorite',
        data: {giphy_id: action.payload}
    })
    yield put({
        type: 'GET_FAVORITE_GIFS'
    })
/*
    When addCategory is called it does axios
    put request and return favorite gifs with
    updated category
*/
function* addCategory(action) {

    try{
        yield axios.put('/api/favorite/'+ action.payload.id)

    } catch(err){
        console.log(err);
    }

    yield put({
        type:'GET_FAVORITE_GIFS'
    })
    
}


// watchersaga function*, will watch for actions
function* watcherSaga() {
    yield takeEvery('GET_FAVORITE_GIFS', getFavoriteGifs)
    yield takeEvery("FETCH_RESULTS", fetchResults)
    yield takeEvery("ADD_FAVORITE", addFavorite)
    yield takeEvery("ADD_CATEGORY", addCategory)
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