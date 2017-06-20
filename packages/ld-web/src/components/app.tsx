import * as React from "react";
import {DivisionTable} from "./division-table";
import {AppProps} from "../props";
import {Dispatcher} from "flux";
import PropTypes = React.PropTypes;
import {FixtureTable} from "./fixture-table";
import {Team} from "ld/model";

class App extends React.Component<AppProps, {}> {
    props: AppProps & {teams: Team[]} & {actionDispatcher: Dispatcher<any>} ;

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
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <DivisionTable teamStatusList={this.props.divisionTableProps.teamStatusList} teams={this.props.teams} tableStatus={this.props.tableStatus}/>
                            </td>
                            <td>
                                <FixtureTable matchResults={this.props.matchResults} teamName={this.props.displayFixtureOf} tableStatus={this.props.tableStatus}/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export {
    App
}