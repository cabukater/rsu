import React from "react";
import { Switch, Route } from "react-router-dom";
//	Páginas
import HomePage from 'pages/Home'
class Routing extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/" component={HomePage} />
             </Switch>
        );
    }
}
export	default	Routing;