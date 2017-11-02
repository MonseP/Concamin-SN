import React, {Component} from 'react';
import EventsList from './EventsList';
import {GridList, GridTile, FlatButton, Dialog} from 'material-ui';
import './EventosStyles.css'
import FiltrarEventos from "./FiltrarEventos";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {FloatingActionButton} from 'material-ui';
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
        const {fetched, eventos} = this.props;
        if(fetched){
            console.log(eventos);
        }
        return (
            <div>
                { fetched ?
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
                        <FloatingActionButton
                            onClick={this.handleOpen}
                            className="fab-button">
                            <ContentAdd/>
                        </FloatingActionButton>
                    </div>
                    :
                    <div className="root-eventos">
                        Loading
                    </div>
                }
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        eventos: state.eventos,
        fetched: state.eventos !== undefined
    }
}

function mapDispatchToProps() {
    return {

    }
}

EventosContainer = connect(mapStateToProps, mapDispatchToProps)(EventosContainer);
export default EventosContainer;