import React from 'react';
import NewPost from "../newsfeed/NewPost";
import PostCard from "../newsfeed/PostCard";

const GroupFeed = ({props}) => {
    return (
        <div>
            <NewPost/>
            <PostCard
                image={'https://static.pexels.com/photos/262577/pexels-photo-262577.jpeg'}
                text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n' +
                '                   #science #newtwork'}/>
            <PostCard
                image={'https://static.pexels.com/photos/262577/pexels-photo-262577.jpeg'}
                text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n' +
                '                   #science #newtwork'}/>
            <PostCard
                image={'https://static.pexels.com/photos/262577/pexels-photo-262577.jpeg'}
                text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n' +
                '                   #science #newtwork'}/>
        </div>
    )
};

export default GroupFeed;