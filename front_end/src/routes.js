import React from 'react'; 
import {Switch, Route} from 'react-router-dom'; 

import User from './pages/User';
import Admin from './pages/Admin';
import Login from './pages/Login'; 

function Routes() {
    return (
        <Switch>
            <Route path="/user" component={User} />
            <Route path="/admin" component={Admin} />
            <Route path="/login" component={Login} />
        </Switch>    
    );
}

export default Routes; 