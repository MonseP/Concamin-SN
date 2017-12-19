import React, {Component} from 'react';
import './chat.css';
import {GridTile, GridList, List, ListItem, Subheader, Avatar, Paper, Card, CardHeader, CardText, TextField} from 'material-ui';
import Bubble from 'material-ui/svg-icons/communication/chat-bubble';
import Person from 'material-ui/svg-icons/social/person';
import Dots from 'material-ui/svg-icons/navigation/more-vert';
import Face from 'material-ui/svg-icons/image/tag-faces';
import Mic from 'material-ui/svg-icons/hardware/keyboard-voice';
//redux
import {connect} from 'react-redux';
import {getUserChats} from "../../redux/actions/chatsActions";

const oswi = "https://scontent.fmex5-1.fna.fbcdn.net/v/t31.0-8/18891870_1543998225611670_8032322982945740932_o.jpg?oh=b39d97a57807da61fbccf20c9301a70d&oe=5A78D305";


class ChatPage extends Component{
	componentWillMount(){
		this.props.getUserChats();
	}
	render(){
		//if(!this.props.fetched) return <h2>Cargando...</h2>
		return(
			<div className="chat-page">
					<div className="div-lista">
						<Subheader >Contactos</Subheader>
						<List>

							<ListItem
								isKeyboardFocused={true}
								secondaryText="bla bla bla bla"
								primaryText="Oswaldo" rightIcon={<Bubble />}
								leftAvatar={<Avatar
									src="https://scontent.fmex5-1.fna.fbcdn.net/v/t31.0-8/18891870_1543998225611670_8032322982945740932_o.jpg?oh=b39d97a57807da61fbccf20c9301a70d&oe=5A78D305" />}/>
							<ListItem
								secondaryText="bla bla bla bla"
								primaryText="Bliss" rightIcon={<Bubble />}
								leftAvatar={<Avatar src="https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/21557454_10214289061678366_2061811084061617122_n.jpg?oh=e4f4748d22179ef2cf8e5d44b53a0884&oe=5A66C49E" />}/>
							<ListItem
								secondaryText="bla bla bla bla"
								primaryText="Brenda" rightIcon={<Bubble />}
								leftAvatar={<Avatar src="https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/12227223_877633965665326_4250458589751884486_n.jpg?oh=7fcb7fac010ede12bc5cbacd996f27d3&oe=5A77D8B1" />}/>
							<ListItem
								secondaryText="bla bla bla bla"
								primaryText="Oswaldo" rightIcon={<Bubble />}
								leftAvatar={<Avatar
									src="https://scontent.fmex5-1.fna.fbcdn.net/v/t31.0-8/18891870_1543998225611670_8032322982945740932_o.jpg?oh=b39d97a57807da61fbccf20c9301a70d&oe=5A78D305" />}/>
							<ListItem
								secondaryText="bla bla bla bla"
								primaryText="Bliss" rightIcon={<Bubble />}
								leftAvatar={<Avatar src="https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/21557454_10214289061678366_2061811084061617122_n.jpg?oh=e4f4748d22179ef2cf8e5d44b53a0884&oe=5A66C49E" />}/>
							<ListItem
								secondaryText="bla bla bla bla"
								primaryText="Brenda" rightIcon={<Bubble />}
								leftAvatar={<Avatar src="https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/12227223_877633965665326_4250458589751884486_n.jpg?oh=7fcb7fac010ede12bc5cbacd996f27d3&oe=5A77D8B1" />}/>
							<ListItem
								secondaryText="bla bla bla bla"
								primaryText="Oswaldo" rightIcon={<Bubble />}
								leftAvatar={<Avatar
									src="https://scontent.fmex5-1.fna.fbcdn.net/v/t31.0-8/18891870_1543998225611670_8032322982945740932_o.jpg?oh=b39d97a57807da61fbccf20c9301a70d&oe=5A78D305" />}/>
							<ListItem
								secondaryText="bla bla bla bla"
								primaryText="Bliss" rightIcon={<Bubble />}
								leftAvatar={<Avatar src="https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/21557454_10214289061678366_2061811084061617122_n.jpg?oh=e4f4748d22179ef2cf8e5d44b53a0884&oe=5A66C49E" />}/>
							<ListItem
								secondaryText="bla bla bla bla"
								primaryText="Brenda" rightIcon={<Bubble />}
								leftAvatar={<Avatar src="https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/12227223_877633965665326_4250458589751884486_n.jpg?oh=7fcb7fac010ede12bc5cbacd996f27d3&oe=5A77D8B1" />}/>


							<ListItem
								secondaryText="bla bla bla bla"
								primaryText="Oswaldo" rightIcon={<Bubble />}
								leftAvatar={<Avatar
									src="https://scontent.fmex5-1.fna.fbcdn.net/v/t31.0-8/18891870_1543998225611670_8032322982945740932_o.jpg?oh=b39d97a57807da61fbccf20c9301a70d&oe=5A78D305" />}/>
							<ListItem
								secondaryText="bla bla bla bla"
								primaryText="Bliss" rightIcon={<Bubble />}
								leftAvatar={<Avatar src="https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/21557454_10214289061678366_2061811084061617122_n.jpg?oh=e4f4748d22179ef2cf8e5d44b53a0884&oe=5A66C49E" />}/>
							<ListItem
								secondaryText="bla bla bla bla"
								primaryText="Brenda" rightIcon={<Bubble />}
								leftAvatar={<Avatar src="https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/12227223_877633965665326_4250458589751884486_n.jpg?oh=7fcb7fac010ede12bc5cbacd996f27d3&oe=5A77D8B1" />}/>
							<ListItem
								secondaryText="bla bla bla bla"
								primaryText="Oswaldo" rightIcon={<Bubble />}
								leftAvatar={<Avatar
									src="https://scontent.fmex5-1.fna.fbcdn.net/v/t31.0-8/18891870_1543998225611670_8032322982945740932_o.jpg?oh=b39d97a57807da61fbccf20c9301a70d&oe=5A78D305" />}/>
							<ListItem
								secondaryText="bla bla bla bla"
								primaryText="Bliss" rightIcon={<Bubble />}
								leftAvatar={<Avatar src="https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/21557454_10214289061678366_2061811084061617122_n.jpg?oh=e4f4748d22179ef2cf8e5d44b53a0884&oe=5A66C49E" />}/>
							<ListItem
								secondaryText="bla bla bla bla"
								primaryText="Brenda" rightIcon={<Bubble />}
								leftAvatar={<Avatar src="https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/12227223_877633965665326_4250458589751884486_n.jpg?oh=7fcb7fac010ede12bc5cbacd996f27d3&oe=5A77D8B1" />}/>
							<ListItem
								secondaryText="bla bla bla bla"
								primaryText="Oswaldo" rightIcon={<Bubble />}
								leftAvatar={<Avatar
									src="https://scontent.fmex5-1.fna.fbcdn.net/v/t31.0-8/18891870_1543998225611670_8032322982945740932_o.jpg?oh=b39d97a57807da61fbccf20c9301a70d&oe=5A78D305" />}/>
							<ListItem
								secondaryText="bla bla bla bla"
								primaryText="Bliss" rightIcon={<Bubble />}
								leftAvatar={<Avatar src="https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/21557454_10214289061678366_2061811084061617122_n.jpg?oh=e4f4748d22179ef2cf8e5d44b53a0884&oe=5A66C49E" />}/>
							<ListItem
								secondaryText="bla bla bla bla"
								primaryText="Brenda" rightIcon={<Bubble />}
								leftAvatar={<Avatar src="https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/12227223_877633965665326_4250458589751884486_n.jpg?oh=7fcb7fac010ede12bc5cbacd996f27d3&oe=5A77D8B1" />}/>


						</List>
					</div>

					<div className="chat-box-bliss">
						<Paper zDepth={4}>
							<ListItem
			                	secondaryText="última vez hoy 10:15"
			                    primaryText="Oswaldo"
								rightIcon={<Dots />}
			                    leftAvatar={<Avatar
			                        src="https://scontent.fmex5-1.fna.fbcdn.net/v/t31.0-8/18891870_1543998225611670_8032322982945740932_o.jpg?oh=b39d97a57807da61fbccf20c9301a70d&oe=5A78D305" />}/>

						    
					    	<div className="chat-mensajes">
					    		<div className="chat-mensaje izquierda">
                                    <Avatar
                                        src={oswi} />
					    			<span> ¿Hola como estas? </span>
					    		</div>
                                <div className="chat-mensaje derecha">
                                    <Avatar
                                        src={oswi} />
                                    <span> ¡Muy bien! ¿y tu? </span>
                                </div>
                                <div className="chat-mensaje izquierda">
                                    <Avatar
                                        src={oswi} />
                                    <span> Trabajando duro </span>
                                </div>
                                <div className="chat-mensaje derecha">
                                    <Avatar
                                        src={oswi} />
                                    <span> Genial! sigue así </span>
                                </div>
                                <div className="chat-mensaje izquierda">
                                    <Avatar
                                        src={oswi} />
                                    <span> Claro!, que tengas un buen día =D </span>
                                </div>

					    	</div>


                            <div className="caja-mensaje">
                                <div>
                                    <Face/>
                                </div>
                                <div className="el-input">
                                    <TextField
                                        multiLine={true}
                                        fullWidth={true}/>
                                </div>
                                <div>
                                    <Mic/>
                                </div>
                            </div>

						  </Paper>

					</div>

			</div>
		)
	}
}

function mapStateToProps(state, ownProps){
	return{
		chats:state.chats.list,
		currentChat:state.chats.current,
		fetched: state.chats.list.length > 0
	}
}

export default ChatPage = connect(mapStateToProps,{getUserChats})(ChatPage);