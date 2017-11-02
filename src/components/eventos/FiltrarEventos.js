import React from 'react';
import {List, ListItem, Subheader,Paper, Divider} from 'material-ui';
import DateIcon from 'material-ui/svg-icons/action/today';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import LawIcon from 'material-ui/svg-icons/action/book';
import BusinessIcon from 'material-ui/svg-icons/communication/business';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Tomorrow from 'material-ui/svg-icons/image/wb-sunny';
import DateRange from 'material-ui/svg-icons/action/date-range';
import Week from 'material-ui/svg-icons/content/weekend';


const FiltrarEventos = (props) => {
    return (
        <div>
            <Paper zdepth={3} >
                <Subheader>Buscar eventos</Subheader>
                <List>
                    <ListItem primaryText="Hoy" leftIcon={<DateIcon />} /*rightIcon={<ActionInfo />}*//>
                    <ListItem primaryText="Mañana" leftIcon={<Tomorrow />} />
                    <ListItem primaryText="Esta semana" leftIcon={<Week />} />
                    <ListItem primaryText="Rango de fecha" leftIcon={<DateRange />} />

                </List>
                <Divider inset={true}/>
                <Subheader>Categorias</Subheader>
                <List>
                    <ListItem primaryText="Negocios" leftIcon={<BusinessIcon />} />
                    <ListItem primaryText="Politica" leftIcon={<LawIcon />} />
                </List>
            </Paper>
        </div>
    );
};

export default FiltrarEventos;