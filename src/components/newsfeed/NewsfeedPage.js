import React, {Component} from 'react';
import PostCard from "./PostCard";
import {GridList, GridTile, RaisedButton} from 'material-ui';
import './newsfeed.css';
import NewPost from "./NewPost";
import MenuGroups from "./MenuGroups";
import Recommendations from "./Recommendations";
import {connect} from "react-redux";
import * as postActions from '../../redux/actions/postsActions';
import {bindActionCreators} from "redux";
import firebase from '../../firebase';

class NewsfeedPage extends Component {
    state={
        newPost:{
            text:'',
            image:''
        },
    };
    handleText=(e)=>{
      let newPost = this.state.newPost;
      let field = e.target.name;
      newPost[field] = e.target.value;
      this.setState({newPost});
      console.log(newPost)
    };
    addPost=()=>{
        this.props.postActions.newPost(this.state.newPost);
        let newPost = this.state.newPost;
        newPost['text']='';
        newPost['image']='';
        this.setState({newPost})
    };
    uploadPhoto=(e)=>{
    let file = e.target.files[0];
        let uploadTask = firebase.storage().ref().child('postfiles/'+file.name).put(e.target.files[0]);
        uploadTask.then(r=>{
            console.log(r);
            let newPost = this.state.newPost;
            newPost['image']=r.downloadURL;
            this.setState({newPost})
        });
        uploadTask.on('state_changed', function(snapshot){
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
        });

    };
    render() {
        return (
            <div className='newsfeed'>
               <GridList cellHeight={'auto'} cols={4} className='news-sections'>
                   <div className='menu-left-section'>
                       <GridTile cols={1} >
                           <MenuGroups/>
                       </GridTile>
                   </div>
                   <GridTile cols={2} className='posts-section'>
                       <NewPost
                            uploadPhoto={this.uploadPhoto}
                           handleText={this.handleText}
                            text={this.state.newPost.text}
                            image={this.state.newPost.image}
                            addPost={this.addPost}/>

                       {this.props.posts.map((post, key)=>{
                           return(
                               <PostCard
                                   key={key}
                                   user={post.user}
                                   image={post.image?post.image:''}
                                   text={post.text}/>
                           )
                       })}

                   </GridTile>
                   <div className='menu-right-section'>
                       <GridTile cols={1} >
                           <Recommendations/>
                       </GridTile>
                   </div>
               </GridList>
            </div>
        )
    }
}


function mapStateToProps(state){
    console.log(state);
    return{
        posts:state.posts,
    }
}
function mapDispatchToProps(dispatch){
    return{
        postActions:bindActionCreators(postActions, dispatch)
    }
}
NewsfeedPage=connect(mapStateToProps, mapDispatchToProps)(NewsfeedPage);
export default NewsfeedPage;