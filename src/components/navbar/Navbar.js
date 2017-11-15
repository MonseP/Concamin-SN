import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Toolbar, ToolbarGroup,  MenuItem, IconMenu, RaisedButton, ToolbarTitle, IconButton, Avatar} from 'material-ui';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import './navbar.css';
import Person from 'material-ui/svg-icons/social/person';
import {cerrarSesion} from "../../redux/actions/usuarioActions";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';


class Navbar extends Component {

    signOut = () => {
        this.props.cerrarSesion();
        this.props.history.push("/");

    };

    render() {
        let user = false;
        const {fetched, usuario} = this.props;
        return (
            <div className="navbar">
                <Toolbar
                    style={{backgroundColor:"#777"}}
                >
                   <ToolbarGroup>
                       <Link to="/" className="link-nav">
                           <ToolbarTitle text="Concamin" />
                       </Link>
                   </ToolbarGroup>
                    {user ?
                        <ToolbarGroup>

                            <Link to="/register" className="link-nav">
                                <RaisedButton label="Regístrate" primary={true} />
                            </Link>
                            <span className="separador-nav">|</span>
                            <Link to="/logIn" className="link-nav">
                                <RaisedButton label="Inicia" primary={true} />
                            </Link>
                        </ToolbarGroup>
                        :
                        <ToolbarGroup>
                            <Link to="/" className="link-nav">
                                <RaisedButton label="Descubre" primary={true} />
                            </Link>
                            <span className="separador-nav">|</span>
                            {fetched && <Avatar
                                src={usuario.photoURL}
                                size={50}
                            /> }
                            <IconMenu
                            iconButtonElement={
                                <IconButton touch={true}>
                                    <NavigationExpandMoreIcon />
                                </IconButton>
                            }
                                >

                                <MenuItem
                                    containerElement={<Link to="/profile" className="link-nav"/>}
                                    primaryText="Perfil" />
                                <Link to="/chat" className="link-nav">
                                    <MenuItem primaryText="Chat" />
                                </Link>
                                <MenuItem onClick={this.signOut} primaryText="Cerrar Sesión" />
                            </IconMenu>
                        </ToolbarGroup>}
                </Toolbar>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state);
    return{
        usuario: state.usuario,
        fetched: Object.keys(state.usuario).length > 0
    }
}

export default withRouter(connect(mapStateToProps, {cerrarSesion})(Navbar));