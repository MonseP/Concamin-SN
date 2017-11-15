import React, {Component} from 'react';
import {ProfileDisplay} from "./ProfileDisplay";
import {CircularProgress, RaisedButton} from 'material-ui';
//redux
import {connect} from 'react-redux';
import {getUser} from "../../redux/actions/usuariosActions";
import {bindActionCreators} from 'redux';
//actions
import {toggleFollow} from "../../redux/actions/usuarioActions";

const defaultImg = "https://fthmb.tqn.com/cD0PNhMM0BxevlBvAgD1ntpQLac=/3558x2363/filters:fill(auto,1)/Cat-rolling-GettyImages-165893132-58ac5ef05f9b58a3c90a144f.jpg";
const Dportada = "https://wallpaperclicker.com/storage/wallpaper/hd-wallpaper-beautiful-art-full-hd-89223888.jpg";


const ProfilePublicDisplay = ({loading, onChange, fetched, changePic, changeCover, onSubmit, photoURL, title, displayName, fullName, email, age, sex, facebook, twitter, github, linkedIn, bio, portada}) => (
    <div>

        <div className="profile-portada" style={{backgroundImage:`url('${Dportada}')`}}>
            <figure>
                <img src={photoURL ? photoURL:defaultImg} alt="user"/>
            </figure>
        </div>

    </div>
);

class ProfilePublic extends Component{

    state = {
        loading:false
    };

    follow = () => {
        const userId = this.props.match.params.userId;
        this.props.toggleFollow(userId);
    };

    render(){
        const {loading} = this.state;
        const {fetched, profile, following} = this.props;
        return(
            <div>
                <ProfilePublicDisplay
                    loading={loading}
                    fetched={fetched}
                    {...profile}/>
                <RaisedButton
                    onClick={this.follow}
                    backgroundColor="orange"
                    label={following ? "Dejar de seguir":"Seguir"}
                />
            </div>
        );
    }
}

function mapStateToProps(state, ownProps){
    const userId = ownProps.match.params.userId;
    return{
        user: state.users.object[userId],
        //following:state.user.following[userId],
        fetched:state.users.object[userId] !== undefined,
    }
}

function mapDispatchToProps(dispatch, ownProps){
    const userId = ownProps.match.params.userId;
    dispatch(getUser(userId));
    return {
        toggleFollow: bindActionCreators(toggleFollow, dispatch)
    }
}

ProfilePublic = connect(mapStateToProps,mapDispatchToProps)(ProfilePublic);
export default ProfilePublic;

