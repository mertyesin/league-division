import * as React from "react";
import {DivisionTable} from "./division-table";
import {AppProps} from "../props";
import {Dispatcher} from "flux";
import PropTypes = React.PropTypes;
import {FixtureTable} from "./fixture-table";

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
            <div>
                <DivisionTable teamStatusList={this.props.divisionTableProps.teamStatusList}/>
                <FixtureTable matchResults={this.props.matchResults} teamName={this.props.displayFixtureOf}/>
            </div>
        )
    }
}

export {
    App
}