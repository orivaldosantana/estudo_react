import React from 'react'; 
import {Switch, Route, Redirect} from 'react-router-dom'; 

import User from './pages/User';
import Admin from './pages/Admin';
import Login from './pages/Login'; 

import { isAuthenticated } from './services/auth'; 

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {... rest} render={ props => (
        isAuthenticated() ? (
            <Component { ... props} />
        ) : (
            <Redirect to={{ pathname: '/', state: {form: props.location}}} />
        )
    )} />

)


function Routes() {
    return (
        <Switch>
            <PrivateRoute path="/user" component={User} />
            <PrivateRoute path="/admin" component={Admin} />
            <Route path="/login" component={Login} />
            <Route path="/" component={Login} />
        </Switch>    
    );
}

export default Routes; 