
import {  Switch, Route,useHistory } from "react-router-dom";
import { Box } from "@material-ui/core";
import "./App.css";

import Header from "./components/Header";
import Home from "./components/home/Home";
import DetailView from "./components/posts/DetailView";
import CreateView from "./components/posts/CreateView";
import UpdateView from "./components/posts/UpdateView";

import Login from './components/account/Login';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';

import { oktaAuthConfig, oktaSignInConfig } from './config';

const oktaAuth = new OktaAuth(oktaAuthConfig);


function AppWithRouterAccess() {

    const history = useHistory();
    const customAuthHandler = () => {
      history.push('/login');
    };

    const restoreOriginalUri = async (_oktaAuth, originalUri) => {
        history.replace(toRelativeUrl(originalUri, window.location.origin));
    };


  return (
    <>
      <Security
        oktaAuth={oktaAuth}
        onAuthRequired={customAuthHandler}
        restoreOriginalUri={restoreOriginalUri}
      >
        <SecureRoute path='/'  component={Header} />
        <Box style={{ marginTop: 64 }}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route
              path="/login"
              render={() => <Login config={oktaSignInConfig} />}
            />
            <Route path="/login/callback" component={LoginCallback} />
            <Route exact path="/details/:id" component={DetailView} />
            <Route exact path="/create" component={CreateView} />
            <Route exact path="/update/:id" component={UpdateView} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </Box>
      </Security>
    </>
  );
}

export default AppWithRouterAccess;
