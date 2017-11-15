import firebase from '../../firebase';



const db = firebase.database().ref();

export const NEW_POST_SUCCESS = 'NEW_POST_SUCCESS';

export function newPostSuccess(post){
    return{
        type:NEW_POST_SUCCESS, post
    }
}

export function savePost(post){
    return function(dispatch, getState){
        let updates = {};
        let key;
        if(post.id) key = post.id;
        else key = db.push().key;

        let uid = getState().usuario.uid;
        post['id'] = key;
        updates[`dev/posts/${key}`] = post;
        updates[`dev/users/${uid}/posts/${post.id}`] = true;
        if(post.group) updates[`dev/groups/${post.group}/posts/${post.id}`] = true;
        if(post.event) updates[`dev/events/${post.event}/posts/${post.id}`] = true;
        console.log(updates);
        return db.update(updates)
            .then(snap=>{
                return Promise.resolve(snap)
            }).catch(error=>{
                console.log(error);
                return Promise.reject(error.message)
            })
    }
}
export const deletePost=(post)=>(dispatch, getState)=>{
    const uid = getState().usuario.uid;
    let updates = {};
    updates[`/posts/${post.id}`] = null;
    updates[`/users/${uid}/posts/${post.id}`] = null;
    if(post.group) updates[`/groups/${post.group}/posts/${post.id}`] = null;
    if(post.event) updates[`/events/${post.event}/posts/${post.id}`] = null;

    return db.update(updates)
        .then(snap=>{
            return Promise.resolve(snap)
        }).catch(error=>{
            console.log(error);
            return Promise.reject(error.message)
        })

};


export const newPost=()=>(dispatch, getState)=>{
    db.child('dev/posts/').on('child_added', snap=>{
        dispatch(newPostSuccess(snap.val()))
    })
};

