import React from 'react';
import {Card, CardText, CardTitle, CardMedia, TextField, IconButton} from 'material-ui';
//import ContentAdd from 'material-ui/svg-icons/content/add-circle';

const ProductCard = ({titulo, usuario, hora, lugar, fecha}) => {
    return (
        <div className="evento-card">
            <Card>
                <CardMedia
                    mediaStyle={{maxHeight:'200px', overflow:'hidden'}}
                    //overlay={<CardTitle title={titulo} subtitle={usuario} />}
                >
                    <img src="http://www.autotransporte.mx/wp-content/uploads/2015/03/Concamin.jpg" alt="" />
                </CardMedia>
                <CardTitle title={titulo} subtitle={usuario} />
                <CardText>
                    <p>Fecha {fecha}</p>
                    <p>Hora: {hora}</p>
                    <p>Lugar {lugar}</p>

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