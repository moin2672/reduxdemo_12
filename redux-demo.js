const redux = require('redux')

const counterReducer = (state = {counter : 0}, action) => {
    return {
        counter:state.counter+1
    }
};

const store = redux.createStore(counterReducer);

// console.log(store.getState())

const counterSubscriber = () => {
    const latestState = store.getState()
    console.log(latestState)
};


store.subscribe(counterSubscriber);

// dispatch is a method which dispatches an action
// action is js object 
// action has type object
store.dispatch({type: 'increment'})