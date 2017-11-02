import React from 'react';
import {Avatar, List, ListItem, Subheader, FloatingActionButton, Paper} from 'material-ui';
import Person from 'material-ui/svg-icons/social/person';
import Work from 'material-ui/svg-icons/action/group-work';
import ContentAdd from 'material-ui/svg-icons/content/add';

import './group_page.css';

const GroupBasics = ({props}) => {
    return (
        <div className="basics-container">
            <Paper className="basics-paper">
            <FloatingActionButton className="members-add-button">
                <ContentAdd />
            </FloatingActionButton>
            <div className="avatar-container">
                <Avatar icon={<Work/>} size={150} className="basics-avatar"/>
            </div>
            <h3>Fixter Team</h3>
            <Subheader>Miembros</Subheader>
            <List className="members-list">
                <ListItem
                    primaryText="Oswaldinho"
                leftAvatar={<Avatar icon={<Person/>}/>}/>
                <ListItem
                    primaryText="Bliss"
                    leftAvatar={<Avatar icon={<Person/>}/>}/>
                <ListItem
                    primaryText="Brenda"
                    leftAvatar={<Avatar icon={<Person/>}/>}/>
                <ListItem
                    primaryText="Saul"
                    leftAvatar={<Avatar icon={<Person/>}/>}/>
                <ListItem
                    primaryText="Miguel"
                    leftAvatar={<Avatar icon={<Person/>}/>}/>
                <ListItem
                    primaryText="JoseLuis"
                    leftAvatar={<Avatar icon={<Person/>}/>}/>
            </List>
            </Paper>
        </div>
    )
};

export default GroupBasics;