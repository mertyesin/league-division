import * as React from "react";
import PropTypes = React.PropTypes;
import {DivisionTableProps} from "../props";
import {Dispatcher} from "flux";
import {ActionTags} from "../actions";
import autobind = require ("autobind-decorator");

class DivisionTable extends React.Component<DivisionTableProps, {}> {
    props: DivisionTableProps & {tableStatus:string};

    static contextTypes = {
        actionDispatcher: PropTypes.object.isRequired
    };

    render () {

        const views: Array<string> = ["England Premier League","Spain LaLiga"];
        let i = 0;
        return (
            <div className="table">
                <img src="./images/england-premier-league/premier-league-logo.png" width="230" height="40"/>
                <select onChange={this.onViewChanged}>
                {
                    views.map(v => {
                        return (
                            <option key={++i} value={v}>
                                {v}
                            </option>
                        );
                    })
                }
            </select>
                <table>
                    <tbody>
                    <tr>
                        <td>
                            <th>
                                <input type="radio" value="home" name="table-status" onChange={this.onTableStatusChanged} checked={this.props.tableStatus === "home"} /> Host
                                <input type="radio" value="away" name="table-status" onChange={this.onTableStatusChanged} checked={this.props.tableStatus === "away"} /> Away
                                <input type="radio" value="allMatches" name="table-status" onChange={this.onTableStatusChanged} checked={this.props.tableStatus === "allMatches"}/> All Matches
                            </th>
                        </td>
                    </tr>
                        <tr>
                            <th>Teams</th>
                            <th>P</th>
                            <th className="hand-button"><a onClick={this.onOrderChangeClicked}>W</a></th>
                            <th className="hand-button"><a onClick={this.onOrderChangeClicked}>L</a></th>
                            <th className="hand-button"><a onClick={this.onOrderChangeClicked}>D</a></th>
                            <th className="hand-button"><a onClick={this.onOrderChangeClicked}>GF</a></th>
                            <th className="hand-button"><a onClick={this.onOrderChangeClicked}>GA</a></th>
                            <th className="hand-button"><a onClick={this.onOrderChangeClicked}>GD</a></th>
                            <th className="hand-button"><a onClick={this.onOrderChangeClicked}>Points</a></th>
                        </tr>
                    </tbody>
                    <tbody>
                    {
                        this.props.teamStatusList.map((t,i) =>
                                <tr  key={t.name}>
                                            <td>{++i}.<img src={this.props.teams.filter(tf => tf.name === t.name)[0].logoPath} width="15" height="15"/>
                                                <a className="hand-button target" onClick={this.onTeamClicked}>{t.name}</a>
                                            </td>
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

    @autobind
    onTableStatusChanged(e: any) {
        const actionDispatcher: Dispatcher<any> = this.context.actionDispatcher;
        const newStatus: string = e.target.value;

        actionDispatcher.dispatch({
            tag: ActionTags.TABLE_STATUS_CHANGE_REQUESTED,
            newStatus: newStatus
        });
    }

    @autobind
    onViewChanged(e: any) {
        const actionDispatcher: Dispatcher<any> = this.context.actionDispatcher;
        const toViewName: string = (e.target.value).toLowerCase().replace(/\s/g, '');

        actionDispatcher.dispatch({
            tag: ActionTags.VIEW_CHANGE_REQUESTED,
            toViewName: toViewName
        });
    }
}

export {
    DivisionTable
}