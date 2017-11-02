import React from 'react';
import {Switch, Route} from 'react-router-dom';
import UserProfilePage from "./components/userprofile/UserProfilePage";
import HomePage from "./components/home/HomePage";
import LoginPage from "./components/login/LoginPage";
import NewsfeedPage from "./components/newsfeed/NewsfeedPage";
import NewPostPage from "./components/newsfeed/NewPostPage";
import ChatPage from './components/chat/ChatPage';

import GroupDisplay from "./components/groups/GroupDisplay";

import SignUpPage from "./components/signup/SignUpPage";
import EventosPage from "./components/eventos/EventosPage";
import EventosContainer from "./components/eventos/EventosContainer";

//import Register from "./components/login/Register";


export const Routes = () => (
    <Switch>
        <Route exact path='/' component={NewsfeedPage}/>
        <Route path='/userprofile' component={UserProfilePage}/>
        <Route path='/logIn' component={LoginPage}/>
        <Route path='/signUp' component={SignUpPage}/>
        <Route path='/register' component={LoginPage}/>
        <Route exact path="/new" component={NewPostPage}/>
        <Route path='/chat' component={ChatPage}/>
        <Route path='/groups/:groupId'component={GroupDisplay}/>
        <Route path='/eventos' component={EventosContainer}/>


    </Switch>
);

