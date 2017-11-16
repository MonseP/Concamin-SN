import firebase from '../../firebase';
import {usuarioVerificado} from "./usuarioVerificadoActions";
import {store} from '../../index';

//const db = firebase.database().ref("normalized");
const db = firebase.database().ref();
const usersRef = db.child("dev").child("users");

//const userId = firebase.auth().currentUser.uid;
////import toastr from 'toastr';

export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const INICIAR_SESION_SUCCESS = "INICIAR_SESION_SUCCESS";

export function iniciarSesionSuccess(user) {
    return {type:INICIAR_SESION_SUCCESS , user};
}

export function cerrarSesionSuccess() {
    return { type:"CERRAR_SESION" };
}

export function comprobarUsuarioAction(user) {
    //return { type: COMPROBAR_USUARIO_SUCCESS, user};
}

function updateUserSuccess(user){
    return{
        type:UPDATE_USER_SUCCESS,
        user
    }
}

export function iniciarSesion(user) {
    return function(dispatch, getState) {
        return firebase.auth()
            .signInWithEmailAndPassword(user.email, user.password)
            .then((u) => {
            console.log(u);
                usersRef.child(u.uid).on('value', snap => {
                    console.log(snap.val());
                    localStorage.setItem('user', JSON.stringify(u));
                    dispatch(iniciarSesionSuccess(snap.val()));
                });
                return Promise.resolve(u.uid);
            })
            .catch((error) => {
            console.log(error);
                const errorCode = error.code;
                // let errorMessage = '';
                // if (errorCode === 'auth/user-not-found') {
                //     errorMessage = 'Usuario no encontrado';
                // } else if (errorCode === 'auth/wrong-password') {
                //     errorMessage = 'La contraseña es inválida';
                // }

                console.log('Algo estuvo mal ',error );
                return Promise.reject(error.message);
                ////toastr.error(errorMessage);
            });

    }
}

export function registrarEIniciarSesion(user) {
    return function (dispatch, getState) {
        return firebase.auth()
            .createUserWithEmailAndPassword(user.email, user.password)
            .then((u) => {
            const user = formatUser(u);
            //touched by bliss Hand
                let updates = {
                    [`dev/users/${user.uid}`]:user,
                };
                db.update(updates);
                return Promise.resolve(u);
            })
            .catch(function(error) {
                //var errorCode = error.code;
                let errorMessage = error.message;
                console.log('something wrong ' + errorMessage);
                //toastr.error('something wrong ' + errorMessage);
                return Promise.reject(error.message);
            });
    }
}

export const updateProfile = (user) =>  (dispatch) => {
        //Touched by Bliss hand
        let updates = {
          [`users/${user.uid}`]:user
        };
        return db.update(updates)
            .then(()=>{
                dispatch(updateUserSuccess(user));
                return Promise.resolve();
            })
            .catch(e=>Promise.reject(e.message));


};



export function cerrarSesion() {
    return function (dispatch,getState) {
        return firebase.auth().signOut()
            .then( () => {
                dispatch(cerrarSesionSuccess());
                localStorage.removeItem("user");
            }).catch( (error) => {
                console.error('No pude salir');
            });

    }
}

export function comprobarUsuario(){
    return function (dispatch, getState) {
        let user = localStorage.getItem('user');
        if(user){
            user = JSON.parse(user);
            usersRef.child(user.uid).on('value', snap => {
                dispatch(iniciarSesionSuccess(snap.val()));
            });
        }
    }
}



//formatters:

function formatUser(u){
    return {
        id:u.uid,
        displayName:"",
        email:u.email,
        age:'',
        canPublish:'',
        groups:{},
        chatsIn:{}
    }
}


//profile actions
export const toggleFollow = (followId) => (dispatch, getState) => {
    console.log(followId);
    const user = getState().usuario;
    console.log(user);
    let updates = {};
    let followingExists = false;
    if (user.following) followingExists = true;
    if(followingExists && user.following[followId]){
        console.log("entré putito");
        updates[`dev/users/${user.id}/following/${followId}`]=null;
        updates[`dev/users/${followId}/followers/${user.id}`]=null;
    }else{
        console.log("yo no entré putito");
        updates[`dev/users/${user.id}/following/${followId}`]=true;
        updates[`dev/users/${followId}/followers/${user.id}`]=true;
    }
    return db.update(updates)
        .then(()=>{
            return Promise.resolve();
        })
        .catch(e=>{
            console.log(e);
            return Promise.reject(e.message);
        });


};


//listeners
firebase.auth().onAuthStateChanged(user=>{
   if(user) {
       //touched by bliss Hand
       return db.child('users/' + user.uid ).once("value")
           .then(s=>{
               if(!s.val()) return;
               store.dispatch(iniciarSesionSuccess(s.val()));
               localStorage.setItem("user", JSON.stringify(user));

           });
   }
});

//update user programmatically
//listen the logged user changes
export const listenUserChanges = (uid) =>(dispatch, getState)=>{
    //console.log("corriendo y stalkeando");
    console.log(uid);
    usersRef.child(uid).on("value", snap=>{
        //console.log(snap.val());
    }) ;
};
