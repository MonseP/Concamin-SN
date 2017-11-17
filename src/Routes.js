import React from 'react';
import {Switch, Route} from 'react-router-dom';
import ProfilePage from "./components/profile/ProfilePage";
import HomePage from "./components/home/HomePage";
import LoginPage from "./components/login/LoginPage";
import NewsfeedPage from "./components/newsfeed/NewsfeedPage";
import NewPostPage from "./components/newsfeed/NewPostPage";
import ChatPage from './components/chat/ChatPage';

import GroupDisplay from "./components/groups/GroupDisplay";

import SignUpPage from "./components/signup/SignUpPage";
import EventosPage from "./components/eventos/EventosPage";
import EventosContainer from "./components/eventos/EventosContainer";
import PrivateRoute from "./PrivateRoute";
import ProfilePublic from "./components/profile/ProfilePublic";
import OrganizationDetailPage from "./components/organizations/OrganizationDetailPage";
import OrganizationsPage from "./components/organizations/OrganizationsPage";


//import Register from "./components/login/Register";


export const Routes = () => (
    <Switch>
        <Route exact path='/' component={NewsfeedPage}/>
        <Route path='/profile' component={ProfilePage}/>
        <Route path='/logIn' component={LoginPage}/>
        <Route path='/signUp' component={SignUpPage}/>
        <Route path='/register' component={LoginPage}/>
        <Route exact path="/new" component={NewPostPage}/>
        <Route path='/chat' component={ChatPage}/>
        <Route path='/groups/:groupId'component={GroupDisplay}/>
        <Route path='/eventos' component={EventosContainer}/>
        <Route path="/users/:userId" component={ProfilePublic} />
        <Route exact path="/organizations" component={OrganizationsPage}/>
        <Route path="/organizations/:organizationId" component={OrganizationDetailPage}/>

    </Switch>
);

