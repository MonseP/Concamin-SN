import React from 'react';
import {Card, CardText, CardTitle, CardMedia, TextField, IconButton, FlatButton} from 'material-ui';
//import ContentAdd from 'material-ui/svg-icons/content/add-circle';

const ProductCard = ({id, titulo, usuario, hora, lugar, fecha, photoUrl, history}) => {
    return (
        <div className="evento-card">
            <Card>
                <CardMedia
                    mediaStyle={{maxHeight:'200px', overflow:'hidden'}}
                    //overlay={<CardTitle title={titulo} subtitle={usuario} />}
                >
                    <img onClick={()=>history.push(`/eventos/${id}`)} style={{maxHeight:'150px', cursor:'pointer'}} src={photoUrl} alt="" />
                </CardMedia>
                <CardTitle title={titulo} subtitle={usuario} />
                <CardText style={{position:'relative'}}>
                    <p>Fecha {fecha}</p>
                    <p>Hora: {hora}</p>
                    <p>Lugar {lugar}</p>
                    {/*<FlatButton style={{position:'absolute'}} className="detail-button" label='Detalle' onClick={()=>history.push(`/eventos/${id}`)}/>*/}

                    {/*<div className="add-item-in-card">*/}
                        {/*<TextField*/}
                            {/*style={{width:'30%'}}*/}
                            {/*hintText="1"*/}
                            {/*type="number"/>*/}
                        {/*<IconButton>*/}
                            {/*<ContentAdd/>*/}
                        {/*</IconButton>*/}
                    {/*</div>*/}


                </CardText>

            </Card>
        </div>
    )
};

export default ProductCard;