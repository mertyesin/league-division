import * as React from "react";
import {DivisionTableProps} from "../props";


class DivisionTable extends React.Component<DivisionTableProps, {}> {
props: DivisionTableProps;

    render () {
        return (

            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>Teams</th>
                            <th>P</th>
                            <th>W</th>
                            <th>L</th>
                            <th>D</th>
                            <th>GF</th>
                            <th>GA</th>
                            <th>GD</th>
                            <th>Points</th>
                        </tr>
                        {
                            this.props.teamStatusList.map(t =>
                             <tr key={t.name}>
                                <td>{t.name}</td>
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
}

export {
    DivisionTable
}