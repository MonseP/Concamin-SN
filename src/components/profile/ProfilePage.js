/**
 * Created by BlisS on 22/03/17.
 */
import React, {Component} from 'react';
import ProfileContainer from "./ProfileContainer";


class ProfilePage extends Component{
    componentWillMount(){
        if(!localStorage.getItem("user")) this.props.history.push("/login");
    }
    render(){
        return (
            <div>
                <ProfileContainer/>
            </div>
        );
    }

}

export default ProfilePage;


