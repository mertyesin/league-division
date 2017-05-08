import * as React from "react";
import {DivisionTable} from "./division-table";
import {AppProps} from "../props";


class App extends React.Component<AppProps, {}> {
    props: AppProps;

        render () {
            return (
                <DivisionTable teamStatusList={this.props.divisionTableProps.teamStatusList} />
            )
        }
    }

export {
    App
}