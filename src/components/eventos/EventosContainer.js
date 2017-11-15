import React, {Component} from 'react';
import EventsList from './EventsList';
import {GridList, GridTile, FlatButton, Dialog} from 'material-ui';
import './EventosStyles.css'
import FiltrarEventos from "./FiltrarEventos";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {FloatingActionButton, CircularProgress} from 'material-ui';
import NuevoEvento from "./NuevoEvento";

class EventosContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        const actions = [
            <FlatButton
                label="Cancelar"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Agregar"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleClose}
            />,
        ];
        const {fetched, eventos, usuario, logged} = this.props;
        if(fetched){
            console.log(eventos);
        }
        return (
            <div>
                { !fetched ? <CircularProgress className="loading-progress" size={80} thickness={7}/> :
                    <div className="root-eventos">
                        <GridList cellHeight={'auto'} cols={3}>
                            <GridTile cols={1} className="left-side">
                                <FiltrarEventos/>
                            </GridTile>
                            <GridTile cols={2} className="right-side">
                                <EventsList eventos={eventos}/>
                            </GridTile>
                        </GridList>
                        <Dialog
                            title="Crear nuevo evento"
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}
                        >
                            <NuevoEvento/>
                        </Dialog>
                        {
                            logged &&
                            <FloatingActionButton
                                onClick={this.handleOpen}
                                className="fab-button">
                                <ContentAdd/>
                            </FloatingActionButton>
                        }

                    </div>
                }
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        eventos: state.eventos,
        fetched: state.eventos !== undefined,
        usuario: state.usuario,
        logged: state.usuario !== null
    }
}

function mapDispatchToProps() {
    return {

    }
}

EventosContainer = connect(mapStateToProps, mapDispatchToProps)(EventosContainer);
export default EventosContainer;