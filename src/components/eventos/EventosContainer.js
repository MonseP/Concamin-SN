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
import * as eventsActions from '../../redux/actions/eventosActions';

const today = new Date();

class EventosContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            newEvent: {
                name:       '',
                owner:      '',
                image:      '',
                place:      '',
                time:       today,
                date:       today,
                isPrivated: false
            },
            imagePreview: {
                src: '',
                file: ''
            },
        };
    }

    ///////////////////////////////////////////////////

    handleNewEventChange = (e) => {
        let {newEvent} = this.state;
        const name = e.target.name;
        newEvent[name] = e.target.value;
        this.setState({newEvent})
    };

    handleNewEventDate = (e, date) => {
        let {newEvent} = this.state;
        newEvent.date = date;
        this.setState({newEvent})
    };

    handleNewEventTime = (event, date) => {
        let {newEvent} = this.state;
        newEvent.time = date;
        this.setState({newEvent})
    };

    handleNewEventPrivate = (event, isInputChecked) =>{
        let {newEvent} = this.state;
        newEvent.isPrivated = isInputChecked;
        this.setState({newEvent})
    };



    ///////////////////////////////////////////////////

    handleOpen = () => {
        const {usuario} = this.props;
        const {newEvent} = this.state;
        newEvent.owner = usuario.id;
        this.setState({open: true, newEvent});
    };

    handleClose = () => {
        let {newEvent} = this.state;

        newEvent = {
            name: '',
            owner: '',
            image: '',
            place: '',
            time: today,
            date: today,
            isPrivated: false
        };

        this.setState({open: false, newEvent});

    };

    selectNewImage = () => {

    };

    uploadPhoto=(e)=>{
        let {imagePreview} = this.state;
        let file = e.target.files[0];
        const reader = new FileReader();

        reader.onload =  (e) => {
            imagePreview.src = e.target.result;
            imagePreview.file = file;
            this.setState({imagePreview});
        };

        reader.readAsDataURL(file);
    };

    saveNewEvent = ( e) => {
        const {newEvent, imagePreview} = this.state;
        this.props.eventsActions.uploadPhoto(newEvent.name, imagePreview.file)
            .then( r => {
                console.log('Image upload successfully');
                newEvent.image = r.downloadURL;
                this.setState({newEvent});
                this.props.eventsActions.saveEvent(newEvent);
                this.handleClose();
            }).catch( e => {
                console.log(e.message);
        });
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
                onClick={this.saveNewEvent}
            />,
        ];
        const {fetched, eventos, usuario, logged} = this.props;
        const {newEvent, imagePreview} = this.state;
        if(fetched){
            console.log(eventos);
        }
        console.log(newEvent);
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
                            autoScrollBodyContent={true}
                        >
                            <NuevoEvento
                                onChange={this.handleNewEventChange}
                                onChangeDate={this.handleNewEventDate}
                                onChangeTime={this.handleNewEventTime}
                                onChangePrivate={this.handleNewEventPrivate}
                                imagePreview={imagePreview}
                                uploadPhoto={this.uploadPhoto}
                                newEvent={newEvent}
                            />
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

function mapDispatchToProps(dispatch) {
    return {
        eventsActions: bindActionCreators(eventsActions, dispatch)
    }
}

EventosContainer = connect(mapStateToProps, mapDispatchToProps)(EventosContainer);
export default EventosContainer;