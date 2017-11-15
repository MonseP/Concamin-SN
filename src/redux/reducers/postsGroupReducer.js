import {GET_ALL_GROUP_POSTS, NEW_POST_GROUP_SUCCESS} from "../actions/postGroupActions";

export default function postsGroupReducer(state=[], action){
    switch(action.type){
        case GET_ALL_GROUP_POSTS:
            return [action.posts, ...state];
        case NEW_POST_GROUP_SUCCESS:
            return [...state ];
        default:
            return state
    }
}