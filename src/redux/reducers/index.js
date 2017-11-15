import {combineReducers} from 'redux';
import usuarioReducer from "./usuarioReducer";
//import usuarioVerificadoReducer from "./usuarioVerificadoReducer";
import eventosReducer from "./eventosReducer";
import postsReducer from "./postsReducer";
import {groupReducers} from "./groupReducers";
import postsGroupReducer from "./postsGroupReducer";


const rootReducer = combineReducers({
    usuario: usuarioReducer,
    //usuarioVerificado: usuarioVerificadoReducer,
    eventos: eventosReducer,
    posts:postsReducer,
    groups:groupReducers,
    postGroups:postsGroupReducer

});

export default rootReducer;
