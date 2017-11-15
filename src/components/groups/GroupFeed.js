import React from 'react';
import NewPost from "../newsfeed/NewPost";
import PostCard from "../newsfeed/PostCard";

const GroupFeed = ({handleText, addPost, uploadPhoto}) => {
    return (
        <div>
            <NewPost
                handleText={handleText}
                addPost={addPost}
                uploadPhoto={uploadPhoto}/>

        </div>
    )
};

export default GroupFeed;