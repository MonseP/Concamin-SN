import React from 'react';
import {CircularProgress, FloatingActionButton, GridList, GridTile} from "material-ui";
import MenuGroups from "../newsfeed/MenuGroups";
import CoverPhoto from "./CoverPhoto";
import DetailInfo from "./DetailInfo";
import NewPost from "../newsfeed/NewPost";
import RemoveIcon from 'material-ui/svg-icons/editor/mode-edit';



const DetailEventComponent = ({event, loading=false, isOwner, removeThisEvent}) => {
    return (
        <div>
            <CoverPhoto
                event={event}
                loading={loading}
            />
            <GridList cellHeight={'auto'} cols={5} className='event-detail-grid'>
                <GridTile cols={2} className="event-detail-left-section" >
                    <DetailInfo removeThisEvent={removeThisEvent} isOwner={isOwner} event={event}/>
                </GridTile>
                <GridTile cols={3} className='posts-section'>
                    <NewPost
                        // uploadPhoto={this.uploadPhoto}
                        // handleText={this.handleText}
                        // text={this.state.newPost.text}
                        // image={this.state.newPost.image}
                        // addPost={this.addPost}
                        // loader={this.state.loader}
                    />

                    {/*{this.props.posts.map((post, key)=>{*/}
                        {/*return(*/}
                            {/*<PostCard*/}
                                {/*key={key}*/}
                                {/*user={post.user}*/}
                                {/*image={post.image?post.image:''}*/}
                                {/*text={post.text}/>*/}
                        {/*)*/}
                    {/*})}*/}

                </GridTile>
                {/*<div className='menu-right-section'>*/}
                    {/*<GridTile cols={1} >*/}
                        {/*<Recommendations users={this.props.users} />*/}
                    {/*</GridTile>*/}
                {/*</div>*/}
            </GridList>
            {
                isOwner &&
                <FloatingActionButton
                    //onClick={}
                    className="fab-button">
                    <RemoveIcon/>
                </FloatingActionButton>
            }

        </div>
    );
};


export default DetailEventComponent;