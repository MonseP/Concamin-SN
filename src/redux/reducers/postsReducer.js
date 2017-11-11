import {GET_ALL_POSTS, NEW_POST_SUCCESS} from "../actions/postsActions";

export default function postsReducer(state=[], action){
    switch(action.type){
        case GET_ALL_POSTS:
            return [action.posts, ...state];
        case NEW_POST_SUCCESS:
            return [...state ];
        default:
            return state
    }
}