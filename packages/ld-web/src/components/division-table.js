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
        const views = ["England Premier League", "Spain LaLiga"];
        let i = 0;
        return (React.createElement("div", { className: "table" },
            React.createElement("img", { className: "hand-button", onClick: this.onReloadClicked, src: "./images/england-premier-league/premier-league-logo.png", width: "230", height: "40" }),
            React.createElement("select", { onChange: this.onViewChanged }, views.map(v => {
                return (React.createElement("option", { key: ++i, value: v }, v));
            })),
            React.createElement("table", null,
                React.createElement("tbody", null,
                    React.createElement("tr", null,
                        React.createElement("td", null,
                            React.createElement("th", null,
                                React.createElement("input", { type: "radio", value: "home", name: "table-status", onChange: this.onTableStatusChanged, checked: this.props.tableStatus === "home" }),
                                " Host",
                                React.createElement("input", { type: "radio", value: "away", name: "table-status", onChange: this.onTableStatusChanged, checked: this.props.tableStatus === "away" }),
                                " Away",
                                React.createElement("input", { type: "radio", value: "allMatches", name: "table-status", onChange: this.onTableStatusChanged, checked: this.props.tableStatus === "allMatches" }),
                                " All Matches"))),
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
                        React.createElement("img", { src: this.props.teams.filter(tf => tf.name === t.name)[0].logoPath, width: "15", height: "15" }),
                        React.createElement("a", { className: "hand-button target", onClick: this.onTeamClicked }, t.name)),
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
    onTableStatusChanged(e) {
        const actionDispatcher = this.context.actionDispatcher;
        const newStatus = e.target.value;
        actionDispatcher.dispatch({
            tag: actions_1.ActionTags.TABLE_STATUS_CHANGE_REQUESTED,
            newStatus: newStatus
        });
    }
    onViewChanged(e) {
        const actionDispatcher = this.context.actionDispatcher;
        const toViewName = (e.target.value).toLowerCase().replace(/\s/g, '');
        actionDispatcher.dispatch({
            tag: actions_1.ActionTags.VIEW_CHANGE_REQUESTED,
            toViewName: toViewName
        });
    }
    onReloadClicked() {
        const actionDispatcher = this.context.actionDispatcher;
        actionDispatcher.dispatch({
            tag: actions_1.ActionTags.RELOAD_REQUESTED
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
__decorate([
    autobind
], DivisionTable.prototype, "onTableStatusChanged", null);
__decorate([
    autobind
], DivisionTable.prototype, "onViewChanged", null);
__decorate([
    autobind
], DivisionTable.prototype, "onReloadClicked", null);
exports.DivisionTable = DivisionTable;
//# sourceMappingURL=division-table.js.map