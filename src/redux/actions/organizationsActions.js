import firebase from '../../firebase';
const db = firebase.database().ref();



export const SAVE_ORGANIZATION_SUCCESS = 'SAVE_ORGANIZATION_SUCCESS';
export function saveOrganizationSuccess(){
    return{
        type:SAVE_ORGANIZATION_SUCCESS, organization
    }
}

export const saveOrganization=(organization)=>(dispatch, getState)=>{
  let updates = {};
    let key;
    if(organization.id) key = organization.id;
    else key = db.push().key;
  organization['id'] = key;
  updates[`dev/organizations/${organization.id}`] = organization;
  updates[`dev/users/${user.id}/organizations/${organization.id}/`] = true;
  db.update(updates)
      .then((snap)=>{
        return Promise.resolve(snap)
      }).catch(e=>{
          return Promise.reject(e)
  })
};

export const DELETE_ORGANIZATION_SUCCESS = 'DELETE_ORGANIZATION_SUCCESS';
export function deleteOrganizationSuccess(){}