import React from 'react';
import {GridTile, GridList, Avatar, Paper, List, ListItem} from 'material-ui';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';

const PerfilSummary = ({user}) => {
    return (
        <Paper zDepth={1} className='main-profile'>
            <div>
                <Avatar src={user.img} size={150} className="main-avatar"/>
            </div>
            {/*<div className="background-profile">*/}

            {/*</div>*/}

            <div className="main-texto">
                <GridList  cols={3} cellHeight='auto'>
                    <GridTile cols={2} >
                        <h2>{user.nombre}</h2>
                        <h3>{user.cargoActual}</h3>
                        <h4>{user.titulo}</h4>
                        <br/>
                        <br/>
                        <p> {user.breveDescripcion}</p>
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
    );
};

export default PerfilSummary;