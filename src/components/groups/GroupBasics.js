import React from 'react';
import {Avatar} from 'material-ui';
import Person from 'material-ui/svg-icons/social/person';
import Work from 'material-ui/svg-icons/action/group-work';

const GroupBasics = ({props}) => {
    return (
        <div>
            <Avatar icon={<Work/>} size={150}/>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi aspernatur aut consectetur delectus dolorem eum labore, laboriosam laborum libero odit officia omnis qui reprehenderit sit velit veniam voluptatem voluptates.
        </div>
    )
};

export default GroupBasics;