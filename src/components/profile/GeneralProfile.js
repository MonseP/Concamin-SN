import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Paper} from 'material-ui';

const bliss = "https://media-exp2.licdn.com/mpr/mpr/shrinknp_400_400/AAIAAQDGAAwAAQAAAAAAAAt1AAAAJDg0YWZkZDNiLTIwZTYtNGQyYy04ZWE5LWE0YmQwODdjMWZjNQ.jpg";

class GeneralProfile extends Component {

    state = {};

    render() {
        return (
            <div>
                <Paper className="paper" zDepth={3}>
                    <div className="general-profile-cover">
                        <img src={bliss} alt="user"/>

                    </div>
                    <div className="general-profile-info">
                        <h2>Héctor BlisS</h2>
                        <p>FullStack developer</p>
                        <p>Google developer groups</p>
                        <p>Pachuca de soto</p>
                    </div>
                </Paper>

            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        state: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(dispatch)
    };
}

export default GeneralProfile = connect(mapStateToProps, mapDispatchToProps)(GeneralProfile);