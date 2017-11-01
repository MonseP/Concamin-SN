import {combineReducers} from 'redux';
import usuarioReducer from "./usuarioReducer";
import usuarioVerificadoReducer from "./usuarioVerificadoReducer";


const rootReducer = combineReducers({
    usuario: usuarioReducer,
    usuarioVerificado: usuarioVerificadoReducer
});

export default rootReducer;
