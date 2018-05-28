import * as React from "react";
import {observer} from "mobx-react";

@observer
export default class NotFound extends React.Component<{}, {}> {
    render() {
        return (
            <div className="app">
                Not Found
            </div>
        );
    }
}