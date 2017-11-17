import React, {Component} from 'react';
import {connect} from "react-redux";
import DetailEventComponent from "./DetailEventComponent";
import * as eventosActions from '../../redux/actions/eventosActions';
import {bindActionCreators} from "redux";

class DetailEventPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    removeThisEvent = () => {
        this.props.eventosActions.deleteEvent(this.props.event)
            .then( r =>{
                console.log('eliminado exitosamente');
                this.props.history.push('/eventos')
            })
            .catch( e => {
                console.log(e);
            } );
    };

    render() {
        const {event, eventFetched, isOwner} = this.props;
        return (
            <div style={{boxSizing:'border-box', width: '100vw', height: '100vh'}}>
                {
                    !eventFetched ? <p>Loading</p> :
                        <DetailEventComponent
                            event={event}
                            isOwner={isOwner}
                            removeThisEvent={this.removeThisEvent}
                        />
                }

            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    const eventId = ownProps.match.params.id;
    const event = state.eventos.filter( event => {
        return event.id === eventId;
    })[0];
    let isOwner = false;
    if (event){
         isOwner = state.usuario.id === event.owner;
    }
    return {
        event,
        eventFetched: event !== undefined,
        isOwner
    }
}

function mapDispatchToProps(dispatch) {
    return {
        eventosActions: bindActionCreators(eventosActions, dispatch)
    }
}

DetailEventPage = connect(mapStateToProps, mapDispatchToProps)( DetailEventPage);
export default DetailEventPage;