import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Provider} from 'react-redux';
import configureStore from "./redux/store/configureStore";
import {comprobarUsuario} from "./redux/actions/usuarioActions";
import 'react-notifications/lib/notifications.css';
import {loadEventos} from "./redux/actions/eventosActions";

import 'toastr/build/toastr.css';

export const store = configureStore();
store.dispatch(comprobarUsuario());
store.dispatch(loadEventos());
injectTapEventPlugin();

const WithRouter = () => (
    <BrowserRouter>
        <MuiThemeProvider>
            <App/>
        </MuiThemeProvider>
    </BrowserRouter>
);

const ReduxProvider = () => (
    <Provider store={store}>
        <WithRouter/>
    </Provider>
);



ReactDOM.render(<ReduxProvider/>, document.getElementById('root'));
registerServiceWorker();
