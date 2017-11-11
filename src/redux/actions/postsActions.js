import firebase from '../../firebase';

export const NEW_POST_SUCCESS = 'NEW_POST_SUCCESS';

export function newPostSuccess(post){
    return{
        type:NEW_POST_SUCCESS, post
    }
}

export function newPost(post){
    return function(dispatch, getState){
        post['user']=getState().usuario.uid;
        return firebase.database().ref('posts').push(post)
            .then(r=>{
                post['key']=r.key;
                dispatch(newPostSuccess(post))
            })
    }
}

export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export function getAllPostsSuccess(posts){
    return{
        type:GET_ALL_POSTS, posts
    }
}

export function getAllPosts(){
    return function(dispatch, getState){
        return firebase.database().ref('posts').on('child_added', snap=>{
            dispatch(getAllPostsSuccess(snap.val()))
        })
    }
}