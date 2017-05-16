"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var React = require("react");
var PropTypes = React.PropTypes;
var actions_1 = require("../actions");
var autobind = require("autobind-decorator");
var FixtureTable = (function (_super) {
    __extends(FixtureTable, _super);
    function FixtureTable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FixtureTable.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("table", null,
                React.createElement("tbody", null,
                    React.createElement("tr", null,
                        React.createElement("th", null, "Matches"))),
                React.createElement("tbody", null, this.props.matchResults.map(function (m) {
                    return React.createElement("tr", null,
                        React.createElement("td", null, m.homeTeamName + " " + m.homeGoals + "-" + m.awayGoals + " " + m.awayTeamName));
                })))));
    };
    FixtureTable.prototype.onTeamClicked = function (e) {
        var actionDispatcher = this.context.actionDispatcher;
        var displayFixtureName = e.target.innerHTML;
        actionDispatcher.dispatch({
            tag: actions_1.ActionTags.TEAM_FIXTURE_DISPLAY_REQUESTED,
            displayFixtureName: displayFixtureName
        });
    };
    return FixtureTable;
}(React.Component));
FixtureTable.contextTypes = {
    actionDispatcher: PropTypes.object.isRequired
};
__decorate([
    autobind
], FixtureTable.prototype, "onTeamClicked", null);
exports.FixtureTable = FixtureTable;
//# sourceMappingURL=fixture-table.js.map