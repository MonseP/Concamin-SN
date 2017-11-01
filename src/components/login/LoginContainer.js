import React, {Component} from 'react';
import { RaisedButton, TextField } from 'material-ui';
import './login.css';

class LoginContainer extends Component {

    render() {
        console.log(this.props.match);
        return (
            <div className="login">
                <div className='login-box'>
                    <h2>Inicia Sesión</h2>
                    <TextField
                       hintText="os@fixter.org"
                       floatingLabelText="Correo"
                   /><br />
                   <TextField
                       type="password"
                       hintText="*******"
                       floatingLabelText="Contraseña"
                   /><br />
                   <RaisedButton label="Inicia"  fullWidth={true}/>
                </div>
            </div>
        )
    }
}

export default LoginContainer;