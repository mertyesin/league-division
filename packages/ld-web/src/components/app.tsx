import * as React from "react";
import {DivisionTable} from "./division-table";
import {AppProps} from "../props";
import {Dispatcher} from "flux";
import PropTypes = React.PropTypes;

class App extends React.Component<AppProps, {}> {
    props: AppProps & {actionDispatcher: Dispatcher<any>};

    static childContextTypes = {
        actionDispatcher: PropTypes.instanceOf(Dispatcher).isRequired
    };

    getChildContext() { // child'a gidecek olan action dispatcher
        return {
            actionDispatcher: this.props.actionDispatcher
        };
    }

    render () {
        return (
            <DivisionTable teamStatusList={this.props.divisionTableProps.teamStatusList}/>
        )
    }
}

export {
    App
}