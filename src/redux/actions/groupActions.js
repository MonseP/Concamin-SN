import firebase from '../../firebase';

export const GET_ALL_GROUPS = 'GET_ALL_GROUPS';

export function getAllGroupsSuccess(groups){
    return{
        type:GET_ALL_GROUPS, groups
    }
}

export function getAllGroups(){
    return function(dispatch, getState){
        return firebase.database().ref('groups').once('value', r=>{
            let groups = [];
            for(let i in r.val()){
                let grupo = r.val()[i];
                grupo['key']=i;
                groups.push(grupo);
            }
            dispatch(getAllGroupsSuccess(groups))
        })
    }
}

export const NEW_GROUP_SUCCESS = 'NEW_GROUP_SUCCESS';

export function newGroupSuccess(group){
    return{
        type:NEW_GROUP_SUCCESS, group
    }
}

export function newGroup(group){
    return function(dispatch, getState){
        return firebase.database().ref('groups').push(group).then(r=>{
            group['key']=r.key;
            dispatch(newGroupSuccess(group));
        })
    }
}