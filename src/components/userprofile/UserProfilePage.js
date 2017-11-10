import React, {Component} from 'react';
import {GridTile, GridList,  Paper, Dialog, Subheader, List, ListItem, } from 'material-ui';
import './userprofile.css';
//import Person from 'material-ui/svg-icons/social/person';
import PostCard from "../newsfeed/PostCard";
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ActionInfo from 'material-ui/svg-icons/action/info';
import {fakeProfile} from './fakeProfile';
import PerfilSummary from "./PerfilSummary";
import ExperienciaPanel from "./ExperienciaPanel";

class UserProfilePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            showAddExperiencia : false
        }
    }
    render() {
        const {showAddExperiencia} = this.state;
        const {experiencias} = fakeProfile;

        return (
            <div className="userprofile">

                <GridList cellHeight={'auto'} cols={3}>

                    <GridTile cols={2} className="left-side">
                        <PerfilSummary user={fakeProfile}/>
                        <ExperienciaPanel experiencias={experiencias}/>
                        <Dialog
                            open={showAddExperiencia}
                        >

                        </Dialog>
                        <Paper zdepth={2} className="extra-info-paper">
                            <Subheader>Explora</Subheader>
                            <List>
                                <ListItem primaryText="Conversaciones" leftIcon={<ContentInbox />} rightIcon={<ActionInfo />}/>
                                <ListItem primaryText="Grupos" leftIcon={<ActionGrade />} rightIcon={<ActionInfo />}/>
                                <ListItem primaryText="Amigos" leftIcon={<ContentSend />} rightIcon={<ActionInfo />}/>
                                <ListItem primaryText="Posts" leftIcon={<ContentDrafts />} rightIcon={<ActionInfo />}/>

                            </List>
                        </Paper>
                    </GridTile>
                    <GridTile cols={1} className="right-side">
                        <div className="last-post">
                            <PostCard image={'https://static.pexels.com/photos/256381/pexels-photo-256381.jpeg'}/>
                            <PostCard image={'https://static.pexels.com/photos/256381/pexels-photo-256381.jpeg'}/>
                            <PostCard image={'https://static.pexels.com/photos/256381/pexels-photo-256381.jpeg'}/>
                        </div>

                    </GridTile>
                </GridList>
            </div>
        )
    }
}

export default UserProfilePage;