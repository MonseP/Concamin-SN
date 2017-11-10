import React from 'react';
import {Card, CardHeader, CardTitle, CardText, CardMedia} from 'material-ui/Card';
import {TextField} from 'material-ui';
import {RaisedButton, IconButton} from 'material-ui';
import ActionHome from 'material-ui/svg-icons/action/home';
import Photo from 'material-ui/svg-icons/image/photo-camera';
import Video from 'material-ui/svg-icons/av/videocam';
import File from 'material-ui/svg-icons/editor/attach-file';
import './newsfeed.css';

const NewPost = ({handleText, text, image, uploadPhoto, addPost}) => {
    return (
        <div className='new-post'>
            <Card>
                <CardHeader
                    title="Qué descubriste hoy?"
                    subtitle='Comparte una foto, artículo o lo que quieras!'
                    avatar="https://static.pexels.com/photos/355956/pexels-photo-355956.jpeg"
                />
                <CardMedia>
                    <img src={image} alt="" />
                </CardMedia>

                <CardText>
                    <TextField
                        value={text}
                        name='text'
                        onChange={handleText}
                        fullWidth={true}
                        multiLine={true}
                    /><br />

                    <div className='post-actions'>
                        <IconButton >
                            <Photo/>
                            <input type="file" className="inputimage" onChange={uploadPhoto}/>
                        </IconButton>
                        <IconButton>
                            <Video/>
                        </IconButton>
                        <IconButton>
                            <File/>
                        </IconButton>
                        <IconButton>
                            <ActionHome/>
                        </IconButton>
                    </div>

                </CardText>
                <RaisedButton
                    fullWidth={true}
                    onClick={addPost}
                >
                    Publicar
                </RaisedButton>

            </Card>
        </div>
    )
};

export default NewPost;