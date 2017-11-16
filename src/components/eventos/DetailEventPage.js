import React, {Component} from 'react';
import {connect} from "react-redux";

class DetailEventPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                Hola
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

DetailEventPage = connect(mapStateToProps, mapDispatchToProps)( DetailEventPage);
export default DetailEventPage;