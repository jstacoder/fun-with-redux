const redux = require('redux');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunk = require('redux-thunk').default;
const rootReducer = require('./reducers');

// the apps initial state on first run
const initialState = {
    programmers: [],
    programmer:{
        name:'',
        age:0,
        job:'',
    }
};

const configureStore = (initialState = initialState) => {
    const store = createStore(
       rootReducer,
       initialState,
       applyMiddleware(thunk),
    );
    return store;
};


module.exports = configureStore;

