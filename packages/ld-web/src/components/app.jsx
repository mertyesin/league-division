"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var division_table_1 = require("./division-table");
var flux_1 = require("flux");
var PropTypes = React.PropTypes;
var fixture_table_1 = require("./fixture-table");
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.getChildContext = function () {
        return {
            actionDispatcher: this.props.actionDispatcher
        };
    };
    App.prototype.render = function () {
        return (<div>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <division_table_1.DivisionTable teamStatusList={this.props.divisionTableProps.teamStatusList} teams={this.props.teams} tableStatus={this.props.tableStatus}/>
                            </td>
                            <td>
                                <fixture_table_1.FixtureTable matchResults={this.props.matchResults} teamName={this.props.displayFixtureOf} tableStatus={this.props.tableStatus}/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>);
    };
    return App;
}(React.Component));
App.childContextTypes = {
    actionDispatcher: PropTypes.instanceOf(flux_1.Dispatcher).isRequired
};
exports.App = App;
