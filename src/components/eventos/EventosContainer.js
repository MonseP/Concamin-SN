import React, {Component} from 'react';
import EventsList from './EventsList';
import {GridList, GridTile} from 'material-ui';
import './EventosStyles.css'
import FiltrarEventos from "./FiltrarEventos";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class EventosContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
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