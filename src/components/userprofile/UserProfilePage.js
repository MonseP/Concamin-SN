import React, {Component} from 'react';
import {GridTile, GridList, Avatar, Paper, Subheader, List, ListItem, Divider} from 'material-ui';
import './userprofile.css';
import Person from 'material-ui/svg-icons/social/person';
import PostCard from "../newsfeed/PostCard";
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ActionInfo from 'material-ui/svg-icons/action/info';

class UserProfilePage extends Component {
    render() {
        return (
            <div className="userprofile">

                <GridList cellHeight={'auto'} cols={3}>

                    <GridTile cols={2} className="left-side">
                        <Paper zDepth={2} className='main-profile'>
                            <div>
                                <Avatar icon={<Person/>} size={150} className="main-avatar"/>
                            </div>

                            <div className="main-texto">
                                <GridList cols={3}>
                                    <GridTile cols={2}>
                                        <h2>Nombre del Usuario</h2>
                                        <h3>Cargo Actual</h3>
                                        <h4>Profesión</h4>
                                        <br/>
                                        <p> Ad, cupiditate dolore dolorum ea eos et exercitationem, iure minus mollitia nihil possimus quae reprehenderit sequi soluta temporibus, voluptatem voluptates. Eveniet, facilis?</p>
                                    </GridTile>
                                    <GridTile cols={1}>
                                        <List>
                                            <ListItem primaryText="Siguiendo" leftIcon={<ContentInbox />}/>
                                            <ListItem primaryText="Seguidores" leftIcon={<ActionGrade />}/>
                                            <ListItem primaryText="Grupos" leftIcon={<ContentSend />}/>


                                        </List>
                                    </GridTile>
                                </GridList>

                            </div>
                        </Paper>
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