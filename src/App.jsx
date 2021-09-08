import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

export default function App (){

    return(

        <Router>
            <main>
                <Switch>
                    <Route path="/" exact >
                        <Home />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/register">
                        
                    </Route>
                </Switch>
            </main>
        </Router>

    )

}