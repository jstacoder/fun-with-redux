let actions = {};
const ADD_PROGRAMMER = 'ADD_PROGRAMMER';
const REMOVE_PROGRAMMER = 'REMOVE_PROGRAMMER';
const SET_NAME = 'SET_NAME';
const SET_AGE = 'SET_AGE';
const SET_JOB = 'SET_JOB';

actions.ADD_PROGRAMMER = ADD_PROGRAMMER;
actions.REMOVE_PROGRAMMER = REMOVE_PROGRAMMER;
actions.SET_NAME = SET_NAME;
actions.SET_AGE = SET_AGE;
actions.SET_JOB = SET_JOB;

const addProgrammer = programmer =>{
    return (dispatch, getState) =>{
        const addProgrammer = programmer || getState().programmer;
        return dispatch({
            type: ADD_PROGRAMMER,
            payload:{
                programmer: addProgrammer
            }
        });
    };
};
actions.addProgrammer = addProgrammer;

const removeProgrammer = programmer =>({
    type: REMOVE_PROGRAMMER,
    payload: {
        programmer
    }
});
actions.removeProgrammer = removeProgrammer;

const setName = name =>({
    type: SET_NAME,
    payload:{
        name
    }
});
actions.setName = setName;

const setAge = age =>({
    type: SET_AGE,
    payload: {
        age
    }
});
actions.setAge = setAge;


const setJob = job =>({
    type: SET_JOB,
    payload:{
        job
    }
});
actions.setJob = setJob;

module.exports = actions;
