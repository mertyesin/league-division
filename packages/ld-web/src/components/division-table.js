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
                        React.createElement("th", null,
                            React.createElement("button", { className: "hand-button" }, "P")),
                        React.createElement("th", null,
                            React.createElement("button", { className: "hand-button" },
                                React.createElement("a", { onClick: this.onOrderChangeClicked }, "W"))),
                        React.createElement("th", null,
                            React.createElement("button", { className: "hand-button" },
                                React.createElement("a", { onClick: this.onOrderChangeClicked }, "L"))),
                        React.createElement("th", null,
                            React.createElement("button", { className: "hand-button" },
                                React.createElement("a", { onClick: this.onOrderChangeClicked }, "D"))),
                        React.createElement("th", null,
                            React.createElement("button", { className: "hand-button" },
                                React.createElement("a", { onClick: this.onOrderChangeClicked }, "GF"))),
                        React.createElement("th", null,
                            React.createElement("button", { className: "hand-button" },
                                React.createElement("a", { onClick: this.onOrderChangeClicked }, "GA"))),
                        React.createElement("th", null,
                            React.createElement("button", { className: "hand-button" },
                                React.createElement("a", { onClick: this.onOrderChangeClicked }, "GD"))),
                        React.createElement("th", null,
                            React.createElement("button", { className: "hand-button" },
                                React.createElement("a", { onClick: this.onOrderChangeClicked }, "Points"))))),
                React.createElement("tbody", null, this.props.teamStatusList.map(function (t) {
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
    DivisionTable.prototype.onOrderChangeClicked = function (e) {
        var actionDispatcher = this.context.actionDispatcher;
        var newOrderBy = e.target.innerHTML;
        actionDispatcher.dispatch({
            tag: actions_1.ActionTags.ORDER_CHANGE_REQUESTED,
            newOrderBy: newOrderBy
        });
    };
    return DivisionTable;
}(React.Component));
DivisionTable.contextTypes = {
    actionDispatcher: PropTypes.object.isRequired
};
__decorate([
    autobind
], DivisionTable.prototype, "onOrderChangeClicked", null);
exports.DivisionTable = DivisionTable;
//# sourceMappingURL=division-table.js.map