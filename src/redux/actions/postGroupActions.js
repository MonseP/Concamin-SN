import firebase from '../../firebase';

export const NEW_POST_GROUP_SUCCESS = 'NEW_POST_GROUP_SUCCESS';

export function newPostGroupSuccess(post){
    return{
        type:NEW_POST_GROUP_SUCCESS, post
    }
}

export function newPostGroup(post){
    return function(dispatch, getState){
        post['user']=getState().usuario.uid;
        return firebase.database().ref('group-posts').push(post)
            .then(r=>{
                post['key']=r.key;
                dispatch(newPostGroupSuccess(post))
            })
    }
}

export const GET_ALL_GROUP_POSTS = 'GET_ALL_GROUP_POSTS';
export function getAllGroupPostsSuccess(posts){
    return{
        type:GET_ALL_GROUP_POSTS, posts
    }
}

export function getAllGroupPosts(){
    return function(dispatch, getState){
        return firebase.database().ref('groups-posts').on('child_added', snap=>{
            dispatch(getAllGroupPostsSuccess(snap.val()))
        })
    }
}