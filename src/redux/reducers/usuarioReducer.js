import {
    UPDATE_USER_SUCCESS
} from "../actions/usuarioActions";

export default function usuarioReducer ( state = {} , action ){
    switch(action.type){
        case "INICIAR_SESION":
            return action.user;
        case UPDATE_USER_SUCCESS:
            console.log("te ando trolleando");
            return action.user;
        case "COMPROBAR_USUARIO":
            return action.usuario;
        case "CERRAR_SESION":
            return  {};
        default:
            return state;
    }
}