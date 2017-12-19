import {combineReducers} from 'redux';

function list(state=[], action){
    switch(action.type){
        default:
            return state;
    }
}

function current(state={}, action){
    switch(action.type){
        default:
            return state;
    }
}

export const chatsReducer = combineReducers({
   list,
   current
});