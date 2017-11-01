import {combineReducers} from 'redux';
import usuarioReducer from "./usuarioReducer";
import usuarioVerificadoReducer from "./usuarioVerificadoReducer";
import eventosReducer from "./eventosReducer";


const rootReducer = combineReducers({
    usuario: usuarioReducer,
    usuarioVerificado: usuarioVerificadoReducer,
    eventos: eventosReducer
});

export default rootReducer;
