const configStore = require("./store");
const actions = require('./actions');

const loadScriptArgs = () =>{
    let args = process.argv;
    args.shift();
    args.shift();
    return args;
};

const saveState = state =>{
    const serializedState = JSON.stringify(state);
    require('fs').writeFileSync('state.json', serializedState);
};
const loadState = (...keys) =>{
    const state = require('./state.json');
    let rtnState = {};
    keys.map( key =>{
        rtnState[key] = state[key];
    });
    return rtnState;
};

const store = configStore(loadState('programmers'));

store.subscribe( newState =>{
    saveState(store.getState());
});

const getProgrammer = name =>{
    const results = store.getState().programmers.filter( itm => (
        itm.name === name
    ));
    if(results.length){
        return results[0];
    }
    return;
};
const setName = name =>{
    store.dispatch(actions.setName(name));
};
const setAge = age =>{
    store.dispatch(actions.setAge(age));
};
const setJob = job =>{
    store.dispatch(actions.setJob(job));
};
const removeProgrammer = programmer =>{
    store.dispatch(actions.removeProgrammer(programmer));
};
const addProgrammer = ({ name, age }) =>{
    setName(name);
    setAge(age);
    setJob("programmer");
    store.dispatch(actions.addProgrammer());
};

const run = () =>{
    const [ action, ...rest ] = loadScriptArgs();

    switch(action){
        case 'add':
            [ name, age ] = rest;
            addProgrammer({name, age});
            console.log('added new programmer: ', store.getState().programmer);
            break;
        case 'list':
            console.log(JSON.stringify(store.getState().programmers));
            break;
        case 'remove':
            [ name ] = rest;
            const programmer = getProgrammer(name);
            if(programmer){
                removeProgrammer(programmer);
                console.log('removed: ', programmer.name);
            }else{
                console.log("programmer named: "+name+" was not found in the store....");
            }
            break;
        default:
            break;
    }
};

run();
