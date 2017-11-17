import React, {Component} from 'react';
import {connect} from "react-redux";
import DetailEventComponent from "./DetailEventComponent";

class DetailEventPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const {event, eventFetched} = this.props;
        return (
            <div style={{boxSizing:'border-box', width: '100vw', height: '100vh'}}>
                {
                    !eventFetched ? <p>Loading</p> :
                        <DetailEventComponent
                            event={event}
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
    return {
        event,
        eventFetched: event !== undefined
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

DetailEventPage = connect(mapStateToProps, mapDispatchToProps)( DetailEventPage);
export default DetailEventPage;