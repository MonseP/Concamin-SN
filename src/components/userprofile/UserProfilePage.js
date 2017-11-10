import React, {Component} from 'react';
import {GridTile, GridList, Avatar, Paper, Subheader, List, ListItem, Divider, IconButton} from 'material-ui';
import './userprofile.css';
import Person from 'material-ui/svg-icons/social/person';
import PostCard from "../newsfeed/PostCard";
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ActionInfo from 'material-ui/svg-icons/action/info';
import {fakeProfile} from './fakeProfile';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import AddIcon from 'material-ui/svg-icons/content/add-circle';

class UserProfilePage extends Component {
    render() {
        let listaExperiencias = [];
        if(fakeProfile.experiencias){
            if (fakeProfile.experiencias.length > 0){
                listaExperiencias = fakeProfile.experiencias.map( (experiencia,key) => {
                    return (
                        <div key={key}>
                        <ListItem
                            leftAvatar={<Avatar src="https://www.fixter.camp/static/assets/images/LOGIS-01.png" />}
                            primaryText={
                                <p>{experiencia.cargo}&nbsp;&nbsp;</p>
                            }
                            secondaryText={
                                <p>
                                    <span style={{color: darkBlack}}>{experiencia.empresa}</span>
                                    { } {experiencia.fechaInicio} - {experiencia.fechaFinal} en {experiencia.lugar}
                                </p>
                            } rightIcon={<ActionInfo />}/>
                            <Divider inset={true}/>
                        </div>
                    )
                });
            }else {
                listaExperiencias = (<ListItem primaryText='Agregue una experiencia nueva'/>)
            }

        }
        return (
            <div className="userprofile">

                <GridList cellHeight={'auto'} cols={3}>

                    <GridTile cols={2} className="left-side">
                        <Paper zDepth={1} className='main-profile'>
                            <div>
                                <Avatar src={fakeProfile.img} size={150} className="main-avatar"/>
                            </div>
                            {/*<div className="background-profile">*/}

                            {/*</div>*/}

                            <div className="main-texto">
                                <GridList  cols={3} cellHeight='auto'>
                                    <GridTile cols={2} >
                                        <h2>{fakeProfile.nombre}</h2>
                                        <h3>{fakeProfile.cargoActual}</h3>
                                        <h4>{fakeProfile.titulo}</h4>
                                        <br/>
                                        <br/>
                                        <p> {fakeProfile.breveDescripcion}</p>
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
                            <Subheader>Experiencia</Subheader>
                            <IconButton style={{position:'absolute'}} className="add-new-experience" tooltip="SVG Icon">
                                <AddIcon />
                            </IconButton>
                            <List>
                                {listaExperiencias}
                            </List>
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