const redux = require('redux')

const counterReducer = (state = {counter : 0}, action) => {

    if (action.type === 'increment'){
        return {
            counter:state.counter+1
        }
    }

    if (action.type === 'decrement'){
        return {
            counter:state.counter-1
        }
    }

    return state;

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
store.dispatch({type: 'decrement'})