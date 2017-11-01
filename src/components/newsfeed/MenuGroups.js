import React from 'react';
import {List, ListItem, Divider, Subheader, Avatar} from 'material-ui';

import {Link} from 'react-router-dom';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Work from 'material-ui/svg-icons/action/group-work';
import Calendar from 'material-ui/svg-icons/action/today';
import './newsfeed.css';


const MenuGroups = ({props}) => {
    return (
        <div>
            <Subheader>Explora</Subheader>
            <List>
                <Link className="newsfeed-link" to="/eventos">
                    <ListItem primaryText="Eventos" leftIcon={<Calendar/>} rightIcon={<ActionInfo />}/>
                </Link>
                <Link className="newsfeed-link" to="/chat">
                    <ListItem primaryText="Conversaciones" leftIcon={<ContentSend />} rightIcon={<ActionInfo />}/>
                </Link>
                <ListItem primaryText="Amigos" leftIcon={<ContentDrafts />} rightIcon={<ActionInfo />}/>
            </List>
            <Divider/>
            <Subheader>Grupos</Subheader>
            <List className="groups-list">
                <Link className="newsfeed-link" to="/groups/1">
                    <ListItem
                        primaryText="FixterTeam"
                        leftAvatar={<Avatar icon={<Work />}/>}/>
                </Link>
                <ListItem
                    primaryText="LOL Adicts"
                    leftAvatar={<Avatar icon={<Work />}/>}/>
                <ListItem
                    primaryText="Packs"
                    leftAvatar={<Avatar icon={<Work />}/>}/>
                <ListItem
                    primaryText="FixterTeam"
                    leftAvatar={<Avatar icon={<Work />}/>}/>
                <ListItem
                    primaryText="LOL Adicts"
                    leftAvatar={<Avatar icon={<Work />}/>}/>
                <ListItem
                    primaryText="Packs"
                    leftAvatar={<Avatar icon={<Work />}/>}/>
                <ListItem
                    primaryText="FixterTeam"
                    leftAvatar={<Avatar icon={<Work />}/>}/>
                <ListItem
                    primaryText="LOL Adicts"
                    leftAvatar={<Avatar icon={<Work />}/>}/>
                <ListItem
                    primaryText="Packs"
                    leftAvatar={<Avatar icon={<Work />}/>}/>


            </List>

        </div>
    )
};

export default MenuGroups;