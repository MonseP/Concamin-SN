import firebase from '../../firebase';

export const NEW_POST_GROUP_SUCCESS = 'NEW_POST_GROUP_SUCCESS';

export function newPostGroupSuccess(post){
    return{
        type:NEW_POST_GROUP_SUCCESS, post
    }
}

export function newPostGroup(post, group){
    return function(dispatch, getState){
        post['user']=getState().usuario.uid;
        return firebase.database().ref('groups/'+group+'/posts').push(post)
            .then(r=>{
                post['key']=r.key;
                dispatch(newPostGroupSuccess(post))
            })
    }
}

export const GET_ALL_GROUP_POSTS = 'GET_ALL_POSTS';
export function getAllGroupPostsSuccess(posts){
    return{
        type:GET_ALL_GROUP_POSTS, posts
    }
}

export function getAllGroupPosts(group){
    return function(dispatch, getState){
        return firebase.database().ref('groups/'+group+'/posts').on('child_added', snap=>{
            dispatch(getAllGroupPostsSuccess(snap.val()))
        })
    }
}