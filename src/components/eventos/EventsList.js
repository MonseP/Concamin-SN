import React from 'react';
import EventCard from "./EventCard";
import {GridList, GridTile} from 'material-ui';
import moment from 'moment';
import 'moment/locale/es';

const EventsList = ({eventos}) => {
    let listaEventos = eventos.map( (evento,key) => {
        moment.locale('es');
        let fecha = moment(evento.fecha).format('DD MMMM YYYY');
        return (
            <GridTile key={key} cols={1}>
                <EventCard
                    titulo={evento.titulo}
                    usuario={evento.usuario}
                    fecha={fecha}
                    hora={evento.hora}
                    lugar={evento.lugar}
                    photoUrl={evento.photoUrl}
                />
            </GridTile>
        );
    });
    return (
        <div className="lista-productos">

            <GridList cellHeight={'auto'} cols={2} className="grid-list">
                {listaEventos}
            </GridList>

        </div>
    )
};

export default EventsList;