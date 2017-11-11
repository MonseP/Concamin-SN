import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateProfile} from '../../redux/actions/usuarioActions';
import {ProfileDisplay} from './ProfileDisplay';
import toastr from 'toastr';

class ProfileContainer extends Component{

    state = {
      profile:{}
    };

    onChange = (e) => {
        let profile = Object.assign({}, this.state.profile);
        const field = e.target.name;
        const value = e.target.value;
        profile[field] = value;
        this.setState({profile});
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.updateProfile(this.state.profile)
            .then(()=>toastr.success("Tus datos se guardaron"))
            .catch(e=>toastr.error("no se pudo guardar", e));
    };

    componentWillReceiveProps(p){
        this.setState({profile:p.usuario});
    }

    render(){
        const {profile} = this.state;
        const {fetched} = this.props;
        return(<ProfileDisplay fetched={fetched} onChange={this.onChange} onSubmit={this.onSubmit} {...profile}/>);
    }
}

function mapStateToProps(state, ownProps) {
    return {
        usuario: state.usuario,
        fetched: Object.keys(state.usuario).length > 0
    };
}

export default ProfileContainer = connect(mapStateToProps, {updateProfile})(ProfileContainer);