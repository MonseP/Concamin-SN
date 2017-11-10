import firebase from '../../firebase';

export const NEW_POST_SUCCESS = 'NEW_POST_SUCCESS';

export function newPostSuccess(post){
    return{
        type:NEW_POST_SUCCESS, post
    }
}

export function newPost(post){
    return function(dispatch, getState){
        
    }
}