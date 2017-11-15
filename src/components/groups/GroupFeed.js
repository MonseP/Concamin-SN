import React from 'react';
import NewPost from "../newsfeed/NewPost";
import PostCard from "../newsfeed/PostCard";

const GroupFeed = ({handleText, addPost, uploadPhoto, newPost}) => {
    return (
        <div>
            <NewPost
                handleText={handleText}
                addPost={addPost}
                uploadPhoto={uploadPhoto}
                text={newPost.text}
                image={newPost.image}
            />

        </div>
    )
};

export default GroupFeed;