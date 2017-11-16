import firebase from '../../firebase';
const db = firebase.database().ref();
const uploadTask = firebase.storage().ref()

export function createEvento(evento){
    return {type: "CREATE_EVENTO", evento}
}
export function toogleLockSuccess(evento){
    return {type: "TOOGLE_LOCK", evento}
}

export function toogleLock(evento){
    return function (dispatch) {
        dispatch(toogleLockSuccess(evento));
        return Promise.resolve();
    }
}


export function resetEventosSuccess() {
    return {type: "RESET_EVENTOS"}
}

export function resetEventos() {
    return function (dispatch) {
        dispatch(resetEventosSuccess());
        return Promise.resolve();
    }
}

export function loadEventosSuccess(eventos){
    return {type: "LOAD_EVENTOS_SUCCESS", eventos}
}

export function createEventoSuccess(evento){
    return {type: "SAVE_NEW_EVENTO_SUCCESS", evento}
}

export function updateEventoSuccess(evento){
    return { type: "UPDATE_EVENTO_SUCCESS", evento };
}

export function updateEvento(evento){
    return function (dispatch, getState) {
        dispatch(updateEventoSuccess(evento));
        return Promise.resolve();
    }
}


export function loadEventos(){
    return function (dispatch) {
        return db.child('dev/events')
            .on('child_added', snap => {
                let evento = snap.val();
                dispatch(loadEventosSuccess(evento));
            });
    };
}


export function saveEvento(evento){
    return function (dispatch, getState){
        if(evento.key){
            let updates = {};
            updates['dev/events/' + evento.key] = evento;
            return firebase.database().ref().update(updates)
                .then(()=>{
                    return dispatch(updateEventoSuccess(evento));
                });
        }else{
            return firebase.database().ref('dev/events/')
                .push(evento)
                .then(s =>{

                    evento['key'] = s.key;
                    return dispatch(createEventoSuccess(evento));
                })
                .catch(error => {
                    throw(error);
                });
        }


    };
}

export const uploadPhoto = (fileName, file)  => (dispatch, getState) => {
    return uploadTask.child('dev/'+ fileName).put(file);
};

//
// function waitForUpload() {
//     uploadTask.on('state_changed', snapshot => {
//         this.setState({loader:true});
//         let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//         console.log('Upload is ' + progress + '% done');
//     });
// }