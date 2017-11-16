import React from 'react';
import NewPost from "../newsfeed/NewPost";
import PostCard from "../newsfeed/PostCard";

const GroupFeed = ({handleText, addPost, uploadPhoto, newPost, posts}) => {
    return (
        <div>
            <NewPost
                handleText={handleText}
                addPost={addPost}
                uploadPhoto={uploadPhoto}
                text={newPost.text}
                image={newPost.image}
            />
            {posts.map((p, key)=>{
                return(
                    <PostCard
                        text={p.text}
                        image={p.image}
                        user={p.user}/>
                )
            })}

        </div>
    )
};

export default GroupFeed;