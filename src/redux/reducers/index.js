import {combineReducers} from 'redux';
import usuarioReducer from "./usuarioReducer";
//import usuarioVerificadoReducer from "./usuarioVerificadoReducer";
import eventosReducer from "./eventosReducer";
import postsReducer from "./postsReducer";
import {groupReducers} from "./groupReducers";
import postsGroupReducer from "./postsGroupReducer";
import {usersReducer} from "./usersReducers";


const rootReducer = combineReducers({
    usuario: usuarioReducer,
    //usuarioVerificado: usuarioVerificadoReducer,
    eventos: eventosReducer,
    posts:postsReducer,
    groups:groupReducers,
    postGroups:postsGroupReducer,
    users:usersReducer

});

export default rootReducer;
