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
        return (React.createElement("div", null,
            React.createElement("table", null,
                React.createElement("tbody", null,
                    React.createElement("tr", null,
                        React.createElement("th", null, "Teams"),
                        React.createElement("th", null, "P"),
                        React.createElement("th", null, "W"),
                        React.createElement("th", null, "L"),
                        React.createElement("th", null, "D"),
                        React.createElement("th", null, "GF"),
                        React.createElement("th", null, "GA"),
                        React.createElement("th", null, "GD"),
                        React.createElement("th", null, "Points")),
                    this.props.teamStatusList.map(function (t) {
                        return React.createElement("tr", { key: t.name },
                            React.createElement("td", null, t.name),
                            React.createElement("td", null, t.played),
                            React.createElement("td", null, t.win),
                            React.createElement("td", null, t.lost),
                            React.createElement("td", null, t.drawn),
                            React.createElement("td", null, t.goalsFor),
                            React.createElement("td", null, t.goalsAgainst),
                            React.createElement("td", null, t.difference),
                            React.createElement("td", null, t.points));
                    })))));
    };
    return DivisionTable;
}(React.Component));
exports.DivisionTable = DivisionTable;
//# sourceMappingURL=division-table.js.map