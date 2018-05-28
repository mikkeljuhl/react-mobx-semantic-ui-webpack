import * as React from "react";
import "./../assets/scss/App.scss";
import {Button} from "semantic-ui-react";
import {appStore} from "../stores/app-store";
import {action} from "mobx";
import {observer} from "mobx-react";

@observer
export default class Homepage extends React.Component<{}, {}> {
    render() {
        return (
            <div className="app">
                <Button onClick={action(() => appStore.counter++)}>{appStore.counter}</Button>
            </div>
        );
    }
}