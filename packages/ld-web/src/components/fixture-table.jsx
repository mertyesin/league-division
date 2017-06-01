"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var FixtureTable = (function (_super) {
    __extends(FixtureTable, _super);
    function FixtureTable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FixtureTable.prototype.render = function () {
        var _this = this;
        return (<div className="table">
                <table>
                    <tbody>
                        <tr>
                            <th>Matches</th>
                        </tr>
                    </tbody>
                    <tbody>
                    {this.props.tableStatus === "home" ?
            this.props.matchResults.filter(function (m) { return m.homeTeamName === _this.props.teamName; }).map(function (t, i) {
                return <tr key={i}>
                                    <td>
                                        {t.homeTeamName + " " + t.homeGoals + "-" + t.awayGoals + " " + t.awayTeamName}
                                    </td>
                                </tr>;
            }) : null}
                    {this.props.tableStatus === "away" ?
            this.props.matchResults.filter(function (m) { return m.awayTeamName === _this.props.teamName; }).map(function (t, i) {
                return <tr key={i}>
                                    <td>
                                        {t.homeTeamName + " " + t.homeGoals + "-" + t.awayGoals + " " + t.awayTeamName}
                                    </td>
                                </tr>;
            }) : null}
                    {this.props.tableStatus === "allMatches" ?
            this.props.matchResults.filter(function (m) { return m.awayTeamName === _this.props.teamName || m.homeTeamName === _this.props.teamName; }).map(function (t, i) {
                return <tr key={i}>
                                    <td>
                                        {t.homeTeamName + " " + t.homeGoals + "-" + t.awayGoals + " " + t.awayTeamName}
                                    </td>
                                </tr>;
            }) : null}
                    </tbody>
                </table>
            </div>);
    };
    return FixtureTable;
}(React.Component));
exports.FixtureTable = FixtureTable;
