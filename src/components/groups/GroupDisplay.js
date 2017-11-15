import React, {Component} from 'react';
import './group_page.css';
import {GridList, GridTile, Paper} from 'material-ui';
import GroupBasics from "./GroupBasics";
import GroupFeed from "./GroupFeed";
import GroupChat from "./GroupChat";
import {connect} from "react-redux";
import {getAllGroupPosts} from "../../redux/actions/postGroupActions";
import firebase from '../../firebase';
import * as postsActions from '../../redux/actions/postsActions';
import {bindActionCreators} from "redux";




class GroupDisplay extends Component {

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
        newPost['group'] = this.props.match.params.groupId;
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
        return (
            <div className="group-page">
               <GridList cols={4} cellHeight="auto" className="group-gridlist">

                  <GridTile cols={1} className="basics-section">

                          <GroupBasics
                              fetched={this.props.fetched}
                              group={this.props.group}/>

                  </GridTile>

                   <GridTile cols={2} className="group-feed">
                       <GroupFeed
                           posts={this.props.posts}
                            handleText={this.handleText}
                            addPost={this.addPost}
                            uploadPhoto={this.uploadPhoto}
                            newPost={this.state.newPost}/>
                   </GridTile>

                   <GridTile cols={1} className="group-chat">
                       <GroupChat />
                   </GridTile>
               </GridList>
            </div>
        )
    }
}

function mapStateToProps(state, oP){
    console.log(state);
    let group = state.groups.filter(g=>{
        return g.key===oP.match.params.groupId
    });
    let posts = state.postGroups.filter(p=>{
       return p.group===oP.match.params.groupId
    });
    return{
        fetched:group[0]!==undefined,
        group:group[0],
        posts:posts,
    }
}
function mapDispatchToProps(dispatch, oP){
    return{
        postActions:bindActionCreators(postsActions, dispatch)
    }
}

GroupDisplay = connect(mapStateToProps, mapDispatchToProps)(GroupDisplay);
export default GroupDisplay;