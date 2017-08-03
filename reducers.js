const combineReducers = require('redux').combineReducers;

const actions = require('./actions');
const ADD_PROGRAMMER = actions.ADD_PROGRAMMER;
const REMOVE_PROGRAMMER = actions.REMOVE_PROGRAMMER;
const SET_NAME = actions.SET_NAME;
const SET_AGE = actions.SET_AGE;
const SET_JOB = actions.SET_JOB;

const initialProgrammersState = [];
const initialNameState = '';
const initialAgeState = 0;
const initialJobState = '';

// reducer to manage a list of objects
const programmersReducer = (state = initialProgrammersState, action) =>{
    switch(action.type){
        case ADD_PROGRAMMER:
            return [ ...state, action.payload.programmer ];
        case REMOVE_PROGRAMMER:
            return state.filter(itm =>( itm != action.payload.programmer));
        default:
            return state;
    }
}

// these reducers will each manage a primitive value and together will represent the current object
const nameReducer = (state = initialNameState, action) =>{
    switch(action.type){
        case SET_NAME:
            return action.payload.name;
        default:
            return state;
    }
};

const ageReducer = (state = initialAgeState, action) =>{
    switch(action.type){
        case SET_AGE:
            return action.payload.age;
        default:
             return state;
    }
};

const jobReducer = (state = initialJobState, action) =>{
    switch(action.type){
        case SET_JOB:
            return action.payload.job;
        default:
            return state;
    }
};

// my idea of using combine reducers to compose the root reducer of nested reducers
// below we are combining the name, age and job reducers into the `programmer` reducer
// so it will mamage all the state  under the stores "programmer" key
const programmerReducer = combineReducers({name: nameReducer, age: ageReducer, job: jobReducer});

// now we are using combineReducers to create the rootReducer with a key for the programmer state and a key to manage the list of programmers
const rootReducer = combineReducers(
    {
        programmer: programmerReducer,
        programmers: programmersReducer,
    }
);

module.exports = rootReducer;

