import * as React from "react";
import PropTypes = React.PropTypes;
import {DivisionTableProps} from "../props";
import {Dispatcher} from "flux";
import {ActionTags} from "../actions"
import * as autobind from "autobind-decorator";

class DivisionTable extends React.Component<DivisionTableProps, {}> {
    props: DivisionTableProps;

    static contextTypes = {
        actionDispatcher: PropTypes.object.isRequired
    };

    render () {

        return (
            <div className="divisionTable">
                <table>
                    <tbody>
                    <th><img src="./images/premier-league-logo.png" width="200" height="40"/></th>
                        <tr>
                            <th>Teams</th>
                            <th><button>P</button></th>
                            <th><button className="hand-button"><a onClick={this.onOrderChangeClicked}>W</a></button></th>
                            <th><button className="hand-button"><a onClick={this.onOrderChangeClicked}>L</a></button></th>
                            <th><button className="hand-button"><a onClick={this.onOrderChangeClicked}>D</a></button></th>
                            <th><button className="hand-button"><a onClick={this.onOrderChangeClicked}>GF</a></button></th>
                            <th><button className="hand-button"><a onClick={this.onOrderChangeClicked}>GA</a></button></th>
                            <th><button className="hand-button"><a onClick={this.onOrderChangeClicked}>GD</a></button></th>
                            <th><button className="hand-button"><a onClick={this.onOrderChangeClicked}>Points</a></button></th>
                        </tr>
                    </tbody>
                    <tbody>
                    {
                        this.props.teamStatusList.map((t,i) =>
                            <tr key={t.name}>
                                <td>{++i}. <a className="hand-button" onClick={this.onTeamClicked}>{t.name}</a></td>
                                <td>{t.played}</td>
                                <td>{t.win}</td>
                                <td>{t.lost}</td>
                                <td>{t.drawn}</td>
                                <td>{t.goalsFor}</td>
                                <td>{t.goalsAgainst}</td>
                                <td>{t.difference}</td>
                                <td>{t.points}</td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        )
    }

    @autobind
    onOrderChangeClicked(e: any) {
        const actionDispatcher: Dispatcher<any> = this.context.actionDispatcher;
        const newOrderBy: string = e.target.innerHTML;

        actionDispatcher.dispatch({
            tag: ActionTags.ORDER_CHANGE_REQUESTED,
            newOrderBy: newOrderBy
        });
    }

    @autobind
    onTeamClicked(e: any) {
        const actionDispatcher: Dispatcher<any> = this.context.actionDispatcher;
        const teamName: string = e.target.innerHTML;

        actionDispatcher.dispatch({
            tag: ActionTags.TEAM_FIXTURE_DISPLAY_REQUESTED,
            teamName: teamName
        });
    }

}
export {
    DivisionTable
}