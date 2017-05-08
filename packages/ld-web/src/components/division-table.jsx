"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var DivisionTable = (function (_super) {
    __extends(DivisionTable, _super);
    function DivisionTable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DivisionTable.prototype.render = function () {
        return (<div>
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
                        {this.props.teamStatusList.map(function (t) {
            return <tr key={t.name}>
                                <td>{t.name}</td>
                                <td>{t.played}</td>
                                <td>{t.win}</td>
                                <td>{t.lost}</td>
                                <td>{t.drawn}</td>
                                <td>{t.goalsFor}</td>
                                <td>{t.goalsAgainst}</td>
                                <td>{t.difference}</td>
                                <td>{t.points}</td>
                            </tr>;
        })}
                    </tbody>
                </table>
            </div>);
    };
    return DivisionTable;
}(React.Component));
exports.DivisionTable = DivisionTable;
