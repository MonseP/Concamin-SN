import {
    UPDATE_USER_SUCCESS
} from "../actions/usuarioActions";

export default function usuarioReducer ( state = {} , action ){
    switch(action.type){
        case "INICIAR_SESION":
            return action.user;

            if (action.usuario) {
                return action.usuario;
            }else{
                return {};
            }

        case UPDATE_USER_SUCCESS:
            return action.user;

        case "CERRAR_SESION":
            return  {};
        default:
            return state;
    }
}