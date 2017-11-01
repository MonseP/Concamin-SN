import React from 'react';
import EventCard from "./EventCard";
import {GridList, GridTile} from 'material-ui';


const EventsList = ({eventos}) => {
    let listaEventos = eventos.map( evento => {
        return (
            <GridTile cols={1}>
                <EventCard
                    titulo={evento.titulo}
                    usuario={evento.usuario}
                    fecha={evento.fecha}
                    hora={evento.hora}
                    lugar={evento.lugar}
                />
            </GridTile>
        );
    });
    return (
        <div className="lista-productos">

            <GridList cellHeight={'auto'} cols={4} className="grid-list">
                {listaEventos}
            </GridList>

        </div>
    )
};

export default EventsList;