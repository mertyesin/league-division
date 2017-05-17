import * as React from "react";
import PropTypes = React.PropTypes;
import {FixtureTableProps} from "../props/fixture-table-props";

class FixtureTable extends React.Component<FixtureTableProps, {}> {
    props: FixtureTableProps;

    render () {

        return (
            <div>
                <table className="fixtureTable">
                    <tbody>
                    <tr>
                        <th>Matches</th>
                    </tr>
                    </tbody>
                    <tbody>
                    {
                        this.props.matchResults.filter(m => m.homeTeamName === this.props.teamName || m.awayTeamName === this.props.teamName).map((t,i) =>
                           <tr key={i}>
                               <td>
                                   {t.homeTeamName + " " + t.homeGoals + "-" + t.awayGoals + " " + t.awayTeamName }
                               </td>
                           </tr>

                        )
                    }
                    </tbody>
                </table>
            </div>
        )
    }

}
export {
    FixtureTable
}