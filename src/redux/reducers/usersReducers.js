import {combineReducers} from "redux";
import {GET_USER_SUCCESS} from "../actions/usuariosActions";

function list(state=[], action){
    switch (action.type){
        default:
            return state;
    }
}

function object(state={}, action){
    switch (action.type){
        case GET_USER_SUCCESS:
            return {
                ...state,
                [action.user.id] : action.user
            };
        default:
            return state;
    }
}

export const usersReducer = combineReducers({
   list,
    object
});