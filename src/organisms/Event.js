import React from 'react';
import FontAwesome from 'react-fontawesome';

import './Event.css'


export const Event = ({photo, imagen, title, name, descript, day, month}) => {
    return(
            <div>
                <div className="fondo">
                    <div className="card">
                        <div className="thumbnail">
                            <img className="left" src={imagen} alt=""/>
                        </div>
                        <div className="right">
                            <h1 className="event_name">{title}</h1>
                            <div className="author">
                                <img  src={photo} alt=""/>
                                <h2 className="data">{name}</h2>
                            </div>
                            <div className="separator"></div>
                                <p style={{overflowY:"scroll", maxHeight:"210px"}}>{descript}</p>
                        </div>
                        <br/>
                        <h5 className="dia">{day}</h5>
                        <h6 className="mes">{month}</h6>
                        <ul>
                            <li><FontAwesome name="eye" size="2x"/></li>
                            <li><FontAwesome name="heart" size="2x"/></li>
                            <li><FontAwesome name="envelope" size="2x"/></li>
                            <li><FontAwesome name="share"size="2x"/></li>
                        </ul>
                        <div className="fab">
                            <FontAwesome name="arrow-down" size="2x"/>
                        </div>
                        </div>
                    </div>
                </div>
    );
}



