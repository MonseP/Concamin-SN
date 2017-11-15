import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import {newPost} from "../actions/postsActions";


export default function configureStore(){
    const store = createStore(
        rootReducer,
        applyMiddleware(thunk)
    );
    store.dispatch(newPost());
    return store;
}

