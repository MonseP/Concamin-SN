import React from 'react';
import './avatar.css';
import avatar from  './user.png'
import {Link} from 'react-router-dom';

export const Avatar = ({image, name, title, link, component}) => {
    return (
        <div className={'avatar-container'}>
            <div className={'avatar-image-container'}>
                <Link to={link?link:'#'} className={'avatar-link'}>
                    <img src={image?image:avatar} alt="" className={'avatar-image'}/>
                </Link>
            </div>
            <div className={'avatar-info-container'}>
                <Link to={link?link:'#'} className={'avatar-link'}>
                    <p className={'name'}>{name?name:'Main Text'}</p>
                    <p className={'title'}>{title?title:'Secondary Text'}</p>
                </Link>
            </div>
            <div className={'extra-component'}>
                {component}
            </div>
        </div>
    )
};

