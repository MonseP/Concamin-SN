import React, {Component} from 'react';
import './EventosStyles.css'

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

export default EventosContainer;