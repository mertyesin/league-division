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
        return (React.createElement("div", { className: "div-fixed" },
            React.createElement("table", null,
                React.createElement("tbody", null,
                    React.createElement("tr", null,
                        React.createElement("th", null, "Matches"))),
                React.createElement("tbody", null, this.props.matchResults.filter(function (m) { return m.homeTeamName === _this.props.teamName || m.awayTeamName === _this.props.teamName; }).map(function (t, i) {
                    return React.createElement("tr", { key: i },
                        React.createElement("td", null, t.homeTeamName + " " + t.homeGoals + "-" + t.awayGoals + " " + t.awayTeamName));
                })))));
    };
    return FixtureTable;
}(React.Component));
exports.FixtureTable = FixtureTable;
//# sourceMappingURL=fixture-table.js.map