import React from 'react';
import {Avatar, Card} from "../index";
import NewPost from "../../components/newsfeed/NewPost";

export const Feed = ({posts, uploadPhoto, handleText, text, image, addPost, loader}) => {
    return (
        <div className={'feed-container'}>
            <NewPost
                uploadPhoto={uploadPhoto}
                handleText={handleText}
                text={text}
                image={image}
                addPost={addPost}
                loader={loader}/>

            {posts.map((p, key)=>{
                return(
                    <div>

                        <Card
                            title={<Avatar/>}
                            image={p.image}
                            body={p.text}/>
                    </div>

                )
            })}
        </div>
    )
};
