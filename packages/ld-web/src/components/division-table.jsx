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
        var _this = this;
        return (<div className="table">
                <img src="./images/england-premier-league/premier-league-logo.png" width="200" height="40"/>
                <table>
                    <tbody>
                    <tr>
                        <td>
                            <input type="radio" value="home" name="table-status" onChange={this.onTableStatusChanged} checked={this.props.tableStatus === "home"}/> Host
                            <input type="radio" value="away" name="table-status" onChange={this.onTableStatusChanged} checked={this.props.tableStatus === "away"}/> Away
                            <input type="radio" value="allMatches" name="table-status" onChange={this.onTableStatusChanged} checked={this.props.tableStatus === "allMatches"}/> All Matches
                        </td>
                    </tr>
                        <tr>
                            <th>Teams</th>
                            <th>P</th>
                            <th className="hand-button"><a onClick={this.onOrderChangeClicked}>W</a></th>
                            <th className="hand-button"><a onClick={this.onOrderChangeClicked}>L</a></th>
                            <th className="hand-button"><a onClick={this.onOrderChangeClicked}>D</a></th>
                            <th className="hand-button"><a onClick={this.onOrderChangeClicked}>GF</a></th>
                            <th className="hand-button"><a onClick={this.onOrderChangeClicked}>GA</a></th>
                            <th className="hand-button"><a onClick={this.onOrderChangeClicked}>GD</a></th>
                            <th className="hand-button"><a onClick={this.onOrderChangeClicked}>Points</a></th>
                        </tr>
                    </tbody>
                    <tbody>
                    {this.props.teamStatusList.map(function (t, i) {
            return <tr key={t.name}>
                                            <td>{++i}.<img src={_this.props.teams.filter(function (tf) { return tf.name === t.name; })[0].logoPath} width="15" height="15"/>
                                                <a className="hand-button" onClick={_this.onTeamClicked}>{t.name}</a>
                                            </td>
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
    DivisionTable.prototype.onOrderChangeClicked = function (e) {
        var actionDispatcher = this.context.actionDispatcher;
        var newOrderBy = e.target.innerHTML;
        actionDispatcher.dispatch({
            tag: actions_1.ActionTags.ORDER_CHANGE_REQUESTED,
            newOrderBy: newOrderBy
        });
    };
    DivisionTable.prototype.onTeamClicked = function (e) {
        var actionDispatcher = this.context.actionDispatcher;
        var teamName = e.target.innerHTML;
        actionDispatcher.dispatch({
            tag: actions_1.ActionTags.TEAM_FIXTURE_DISPLAY_REQUESTED,
            teamName: teamName
        });
    };
    DivisionTable.prototype.onTableStatusChanged = function (e) {
        var actionDispatcher = this.context.actionDispatcher;
        var newStatus = e.target.value;
        actionDispatcher.dispatch({
            tag: actions_1.ActionTags.TABLE_STATUS_CHANGE_REQUESTED,
            newStatus: newStatus
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
__decorate([
    autobind
], DivisionTable.prototype, "onTeamClicked", null);
__decorate([
    autobind
], DivisionTable.prototype, "onTableStatusChanged", null);
exports.DivisionTable = DivisionTable;
