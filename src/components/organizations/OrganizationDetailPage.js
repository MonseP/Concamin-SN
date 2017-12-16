import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {GridList, GridTile} from 'material-ui';
import {Avatar, List, ListItem, Subheader, FloatingActionButton, Paper} from 'material-ui';
import Person from 'material-ui/svg-icons/social/person';
import Work from 'material-ui/svg-icons/action/work';
import ContentAdd from 'material-ui/svg-icons/content/add';
import './organizations.css';
import NewPost from "../newsfeed/NewPost";
import PostCard from "../newsfeed/PostCard";
import firebase from '../../firebase';
import * as postActions from '../../redux/actions/postsActions';
import {Feed} from "../../organisms/index";

class OrganizationDetailPage extends Component {
    state={
        newPost:{},
        loader:false
    };

    //newPost Functions
    handleText=(e)=>{
        let newPost = this.state.newPost;
        let field = e.target.name;
        newPost[field] = e.target.value;
        this.setState({newPost});
        console.log(newPost)
    };
    addPost=()=>{
        let newPost = this.state.newPost;
        newPost['organization'] = this.props.match.params.organizationId;
        this.props.postActions.savePost(newPost);

        newPost['text']='';
        newPost['image']='';
        this.setState({newPost})
    };
    uploadPhoto=(e)=>{
        let file = e.target.files[0];
        let uploadTask = firebase.storage().ref().child('postGroupfiles/'+file.name).put(e.target.files[0]);
        uploadTask.then(r=>{
            console.log(r);
            let newPost = this.state.newPost;
            newPost['image']=r.downloadURL;
            this.setState({newPost, loader:false})
        });
        uploadTask.on('state_changed', snapshot=>{
            this.setState({loader:true});
            let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
        });

    };

    render() {
        let org = this.props.org;
    if(!this.props.fetched)return(<div>loading</div>);
        return (
            <div className="organization-detail">
                <GridList cols={4} cellHeight={'auto'}>
                    <GridTile cols={1} className="organization-basics-container">
                        <Paper className="organization-basics">
                            <FloatingActionButton className="floating-button">
                                <ContentAdd />
                            </FloatingActionButton>
                            <div className="">
                                <Avatar icon={<Work/>} size={150} className=""/>
                            </div>
                            <h3>{org.name}</h3>
                            <Subheader>Miembros</Subheader>
                            <List className="">
                                <ListItem
                                    primaryText="Oswaldinho"
                                    leftAvatar={<Avatar icon={<Person/>}/>}/>
                                <ListItem
                                    primaryText="Bliss"
                                    leftAvatar={<Avatar icon={<Person/>}/>}/>
                                <ListItem
                                    primaryText="Brenda"
                                    leftAvatar={<Avatar icon={<Person/>}/>}/>
                                <ListItem
                                    primaryText="Saul"
                                    leftAvatar={<Avatar icon={<Person/>}/>}/>
                                <ListItem
                                    primaryText="Miguel"
                                    leftAvatar={<Avatar icon={<Person/>}/>}/>
                                <ListItem
                                    primaryText="JoseLuis"
                                    leftAvatar={<Avatar icon={<Person/>}/>}/>
                            </List>
                        </Paper>
                    </GridTile>
                    <GridTile cols={2} className="organization-basics-container">

                        <Feed
                            handleText={this.handleText}
                            addPost={this.addPost}
                            uploadPhoto={this.uploadPhoto}
                            text={this.state.newPost.text}
                            image={this.state.newPost.image}
                            loader={this.state.loader}
                            posts={this.props.posts}
                        />
                    </GridTile>
                    <GridTile cols={1} className="organization-basics-container">
                        <Paper className="paper-datos">Datos Básicos</Paper>
                        <Paper className="paper-datos">Más Datos</Paper>
                        <Paper className="paper-datos">Otros Dato</Paper>
                    </GridTile>
                </GridList>
            </div>
        );
    }
}


function mapStateToProps(state, ownProps) {

    let orgId = ownProps.match.params.organizationId;
    let organization = state.organizations.list.filter(o=>{return o.id===orgId});
    organization = organization[0];
    console.log(organization);
    let posts = state.posts.filter(p=>{
        return p.organization!==undefined && p.organization===orgId
    });
    return {
        posts: posts,
        fetched:organization!==undefined,
        org:organization
    }
}

function mapDispatchToProps(dispatch) {
    return {
        postActions: bindActionCreators(postActions, dispatch)
    }
}
OrganizationDetailPage = connect(mapStateToProps, mapDispatchToProps)(OrganizationDetailPage);
export default OrganizationDetailPage;
