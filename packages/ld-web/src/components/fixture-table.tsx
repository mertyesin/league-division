import * as React from "react";
import PropTypes = React.PropTypes;
import {FixtureTableProps} from "../props";

class FixtureTable extends React.Component<FixtureTableProps, {}> {
    props: FixtureTableProps & {tableStatus: string};

    render () {

        return (
            <div className="table">
                <table>
                    <tbody>
                        <tr>
                            <th>Matches</th>
                        </tr>
                    </tbody>
                    <tbody className="tinySize">
                    {
                        this.props.tableStatus === "home" ?
                            this.props.matchResults.filter(m => m.homeTeamName === this.props.teamName).map((t, i) =>
                                <tr key={i}>
                                    <td>
                                        {t.homeTeamName + " " + t.homeGoals + "-" + t.awayGoals + " " + t.awayTeamName}
                                    </td>
                                </tr>
                            ) : null
                    }
                    {
                    this.props.tableStatus === "away" ?
                        this.props.matchResults.filter(m => m.awayTeamName === this.props.teamName).map((t, i) =>
                                <tr key={i}>
                                    <td>
                                        {t.homeTeamName + " " + t.homeGoals + "-" + t.awayGoals + " " + t.awayTeamName}
                                    </td>
                                </tr>
                            ) : null
                    }
                    {
                        this.props.tableStatus === "allMatches" ?
                            this.props.matchResults.filter(m => m.awayTeamName === this.props.teamName || m.homeTeamName === this.props.teamName).map((t, i) =>
                                <tr key={i}>
                                    <td>
                                        {t.homeTeamName + " " + t.homeGoals + "-" + t.awayGoals + " " + t.awayTeamName}
                                    </td>
                                </tr>
                            ): null
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