import React from 'react';
import {Paper, TextField, IconButton, Avatar} from 'material-ui';
import Emoji from 'material-ui/svg-icons/editor/insert-emoticon';
import File from 'material-ui/svg-icons/editor/attach-file';
import Photo from 'material-ui/svg-icons/editor/insert-photo';
import Gif from 'material-ui/svg-icons/action/gif';
import Heart from 'material-ui/svg-icons/action/favorite-border';

const GroupChat = ({props}) => {
    return (

        <Paper className="group-chat-paper">
            <div className="chat-box">

                <div className="chat left-chat">
                    <Avatar icon={<Emoji size={10}/>}/>
                    <div className="chat-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid aut blanditiis consectetur cumque deserunt dolorem ea enim ex id incidunt modi officia officiis optio perferendis quae repellat rerum, veniam.
                    </div>
                </div>
                <div className="chat left-chat">
                    <Avatar icon={<Emoji size={10}/>}/>
                    <div className="chat-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid aut blanditiis consectetur cumque deserunt dolorem ea enim ex id incidunt modi officia officiis optio perferendis quae repellat rerum, veniam.
                    </div>
                </div>
                <div className="chat left-chat">
                    <Avatar icon={<Emoji size={10}/>}/>
                    <div className="chat-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid aut blanditiis consectetur cumque deserunt dolorem ea enim ex id incidunt modi officia officiis optio perferendis quae repellat rerum, veniam.
                    </div>
                </div>

                <div className="chat right-chat">
                    <Avatar icon={<Emoji size={20}/>}/>
                    <div className="chat-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid aut blanditiis consectetur cumque deserunt dolorem ea enim ex id incidunt modi officia officiis optio perferendis quae repellat rerum, veniam.
                    </div>
                </div>
                <div className="chat left-chat">
                    <Avatar icon={<Emoji size={10}/>}/>
                    <div className="chat-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid aut blanditiis consectetur cumque deserunt dolorem ea enim ex id incidunt modi officia officiis optio perferendis quae repellat rerum, veniam.
                    </div>
                </div>
                <div className="chat left-chat">
                    <Avatar icon={<Emoji size={10}/>}/>
                    <div className="chat-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid aut blanditiis consectetur cumque deserunt dolorem ea enim ex id incidunt modi officia officiis optio perferendis quae repellat rerum, veniam.
                    </div>
                </div>

            </div>
            <div className="text-box">
               <TextField
                   fullWidth={true}
                   multiLine={true}
                   hintText="Escribe..."/><br/>
                <div className="botones-chat-container">
                   <IconButton
                       iconStyle={{width:'20px', height:'20px'}}
                       style={{width:'40px', height:'40px', padding:'1px'}}>
                    <Emoji/>
                   </IconButton>
                    <IconButton
                        iconStyle={{width:'20px', height:'20px'}}
                        style={{width:'40px', height:'40px', padding:'1px'}}>
                        <File/>
                    </IconButton>
                    <IconButton
                        iconStyle={{width:'20px', height:'20px'}}
                        style={{width:'40px', height:'40px', padding:'1px'}}>
                        <Photo/>
                    </IconButton>
                    <IconButton
                        iconStyle={{width:'20px', height:'20px'}}
                        style={{width:'40px', height:'40px', padding:'1px'}}>
                        <Gif/>
                    </IconButton>
                    <IconButton
                        iconStyle={{width:'20px', height:'20px'}}
                        style={{width:'40px', height:'40px', padding:'1px'}}>
                        <Heart/>
                    </IconButton>

                </div>
            </div>
        </Paper>

    )
};

export default GroupChat;