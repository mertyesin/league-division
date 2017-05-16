import * as React from "react";
import PropTypes = React.PropTypes;
import {Dispatcher} from "flux";
import {ActionTags} from "../actions"
import * as autobind from "autobind-decorator";
import {FixtureTableProps} from "../props/fixture-table-props";

class FixtureTable extends React.Component<FixtureTableProps, {}> {
    props: FixtureTableProps;

    static contextTypes = {
        actionDispatcher: PropTypes.object.isRequired
    };

    render () {

        return (
            <div>
                <table>
                    <tbody>
                    <tr>
                        <th>Matches</th>
                    </tr>
                    </tbody>
                    <tbody>
                    {
                        this.props.matchResults.map(m =>
                        <tr>
                            <td>
                                {m.homeTeamName + " " + m.homeGoals + "-" + m.awayGoals + " " + m.awayTeamName }
                            </td>
                        </tr>

                        )
                    }
                    </tbody>
                </table>
            </div>
        )
    }

    @autobind
    onTeamClicked(e: any) {
        const actionDispatcher: Dispatcher<any> = this.context.actionDispatcher;
        const displayFixtureName: string = e.target.innerHTML;

        actionDispatcher.dispatch({
            tag: ActionTags.TEAM_FIXTURE_DISPLAY_REQUESTED,
            displayFixtureName: displayFixtureName
        });
    }

}
export {
    FixtureTable
}