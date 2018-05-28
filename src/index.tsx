import * as React from "react";
import * as ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Homepage from "./components/homepage";
import NotFound from "./components/generic/not-found";

import "semantic-ui-less/semantic.less";

class App extends React.Component<{}, {}> {
    render() {
        return (
            <Switch>
                <Route exact path="/" render={(props) => (<Homepage {...props} />)}/>
                <Route path="/counter-starting-from-1" render={(props) => (<Homepage {...props} />)}/>
                <Route component={NotFound} />
            </Switch>
        );
    }
}

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById("root"));
