import React, {Component} from 'react';
import {GridTile, GridList,  Paper, Dialog, Subheader, List, ListItem, FlatButton } from 'material-ui';
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
import AddNewExperienciaForm from "./AddNewExperienciaForm";

class UserProfilePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            addExperienciaShowed : false,
            profile: fakeProfile,
            nuevaExperiencia: {cargo: '', empresa: '', fechaInicio: {}, fechaFinal:{}, ubicacion:'', descripcion: '', publico: true}
        }
    }

    showAddExperiencia = () => {
        this.setState({addExperienciaShowed: true});
    };

    closeAddExperiencia = () => {
        this.setState({addExperienciaShowed: false});
    };

    handleAddExperienciaChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        let {nuevaExperiencia} = this.state;
        nuevaExperiencia[name] = value;
        this.setState({nuevaExperiencia});
    };

    handleFechaInicioChange = (event, date) => {

        let {nuevaExperiencia} = this.state;
        nuevaExperiencia['fechaInicio'] = date;
        this.setState({nuevaExperiencia});
    };

    handleFechaFinalChange = (event, date) => {
        let {nuevaExperiencia} = this.state;
        nuevaExperiencia['fechaFinal'] = date;
        this.setState({nuevaExperiencia});
    };
    addExperiencia = () => {
        let {profile} = this.state;
        profile.experiencias.push(this.state.nuevaExperiencia);
        const nuevaExperiencia =  {cargo: '', empresa: '', fechaInicio: {}, fechaFinal:{}, ubicacion:'', descripcion: '', publico: true};
        this.setState({profile, nuevaExperiencia});
        this.closeAddExperiencia();
    };

    render() {
        const {addExperienciaShowed, profile, nuevaExperiencia} = this.state;
        const {experiencias} = profile;

        const actionsAddExperiencia  = [
            <FlatButton
                label="Cancelar"
                primary={true}
                onClick={this.closeAddExperiencia}
            />,
            <FlatButton
                label="Agregar"
                primary={true}
                keyboardFocused={true}
                onClick={this.addExperiencia}
            />,
        ];
        return (
            <div className="userprofile">

                <GridList cellHeight={'auto'} cols={3}>

                    <GridTile cols={2} className="left-side">
                        <PerfilSummary user={fakeProfile}/>
                        <ExperienciaPanel showAddExperiencia={this.showAddExperiencia} experiencias={experiencias}/>
                        <Dialog
                            open={addExperienciaShowed}
                            onRequestClose={this.closeAddExperiencia}
                            modal={false}
                            actions={actionsAddExperiencia}
                        >
                            <AddNewExperienciaForm
                                experiencia={nuevaExperiencia}
                                onChange={this.handleAddExperienciaChange}
                                onFechaInicioChange={this.handleFechaInicioChange}
                                onFechaFinalChange={this.handleFechaFinalChange}
                            />
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