import firebase from '../../firebase';
import {usuarioVerificado} from "./usuarioVerificadoActions";
import {store} from '../../index';

const db = firebase.database().ref("normalized");

//const userId = firebase.auth().currentUser.uid;
////import toastr from 'toastr';

export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";

export function iniciarSesionAction(user) {
    return {type:"INICIAR_SESION" , user};
}

export function cerrarSesionAction(usuario) {
    return { type:"CERRAR_SESION" , usuario };
}

export function comprobarUsuarioAction(usuario) {
    return { type:"COMPROBAR_USUARIO", usuario};
}

function updateUserSuccess(user){
    return{
        type:UPDATE_USER_SUCCESS,
        user
    }
}

export function iniciarSesion(user) {
    return function(dispatch, getState) {
        // console.log(user)
        return firebase.auth()
            .signInWithEmailAndPassword(user.email, user.password)
            .then((u) => {

                db.child('users/' + u.uid ).once("value")
                    .then(s=>{

                        dispatch(iniciarSesionAction(s.val()));
                        localStorage.setItem("user", JSON.stringify(u));
                        return Promise.resolve(s.val());
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                let errorMessage = '';
                if (errorCode === 'auth/user-not-found') {
                    errorMessage = 'Usuario no encontrado';
                } else if (errorCode === 'auth/wrong-password') {
                    errorMessage = 'La contraseña es inválida';
                }

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
                    [`users/${user.uid}`]:user,
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
            .then( (r) => {
                console.log('Ya sali ', r);
                ////toastr.success('Ha cerrado sesión');
                dispatch(cerrarSesionAction(null));
                localStorage.removeItem("user");
            }).catch( (error) => {
                console.error('No pude salir');
            });

    }
}

export function comprobarUsuario(){
    return function (dispatch, getState) {
        return firebase.auth().onAuthStateChanged((u) => {
            if(u){

                dispatch(comprobarUsuarioAction(u));
                dispatch(usuarioVerificado());
            }else{
                dispatch(usuarioVerificado());

            }

        });
    }
}



//formatters:

function formatUser(u){
    return {
        uid:u.uid,
        displayName:"",
        email:u.email,
        age:'',
        canPublish:'',
        groups:{},
        chatsIn:{}
    }
}

//listeners
firebase.auth().onAuthStateChanged(user=>{
   if(user) {

       //touched by bliss Hand
       db.child('users/' + user.uid ).once("value")
           .then(s=>{
               store.dispatch(iniciarSesionAction(s.val()));
               localStorage.setItem("user", JSON.stringify(user));

           });
   }
});