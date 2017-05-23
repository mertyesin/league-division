"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const React = require("react");
var PropTypes = React.PropTypes;
const actions_1 = require("../actions");
const autobind = require("autobind-decorator");
class DivisionTable extends React.Component {
    render() {
        return (React.createElement("div", { className: "divisionTable" },
            React.createElement("table", null,
                React.createElement("tbody", null,
                    React.createElement("img", { src: "./images/premier-league-logo.png", width: "200", height: "40" }),
                    React.createElement("tr", null,
                        React.createElement("th", null, "Teams"),
                        React.createElement("th", null, "P"),
                        React.createElement("th", { className: "hand-button" },
                            React.createElement("a", { onClick: this.onOrderChangeClicked }, "W")),
                        React.createElement("th", { className: "hand-button" },
                            React.createElement("a", { onClick: this.onOrderChangeClicked }, "L")),
                        React.createElement("th", { className: "hand-button" },
                            React.createElement("a", { onClick: this.onOrderChangeClicked }, "D")),
                        React.createElement("th", { className: "hand-button" },
                            React.createElement("a", { onClick: this.onOrderChangeClicked }, "GF")),
                        React.createElement("th", { className: "hand-button" },
                            React.createElement("a", { onClick: this.onOrderChangeClicked }, "GA")),
                        React.createElement("th", { className: "hand-button" },
                            React.createElement("a", { onClick: this.onOrderChangeClicked }, "GD")),
                        React.createElement("th", { className: "hand-button" },
                            React.createElement("a", { onClick: this.onOrderChangeClicked }, "Points")))),
                React.createElement("tbody", null, this.props.teamStatusList.map((t, i) => React.createElement("tr", { key: t.name },
                    React.createElement("td", null,
                        ++i,
                        ".",
                        React.createElement("img", { src: t.logoPath, width: "15", height: "15" }),
                        React.createElement("a", { className: "hand-button", onClick: this.onTeamClicked }, t.name)),
                    React.createElement("td", null, t.played),
                    React.createElement("td", null, t.win),
                    React.createElement("td", null, t.lost),
                    React.createElement("td", null, t.drawn),
                    React.createElement("td", null, t.goalsFor),
                    React.createElement("td", null, t.goalsAgainst),
                    React.createElement("td", null, t.difference),
                    React.createElement("td", null, t.points)))))));
    }
    onOrderChangeClicked(e) {
        const actionDispatcher = this.context.actionDispatcher;
        const newOrderBy = e.target.innerHTML;
        actionDispatcher.dispatch({
            tag: actions_1.ActionTags.ORDER_CHANGE_REQUESTED,
            newOrderBy: newOrderBy
        });
    }
    onTeamClicked(e) {
        const actionDispatcher = this.context.actionDispatcher;
        const teamName = e.target.innerHTML;
        actionDispatcher.dispatch({
            tag: actions_1.ActionTags.TEAM_FIXTURE_DISPLAY_REQUESTED,
            teamName: teamName
        });
    }
}
DivisionTable.contextTypes = {
    actionDispatcher: PropTypes.object.isRequired
};
__decorate([
    autobind
], DivisionTable.prototype, "onOrderChangeClicked", null);
__decorate([
    autobind
], DivisionTable.prototype, "onTeamClicked", null);
exports.DivisionTable = DivisionTable;
//# sourceMappingURL=division-table.js.map