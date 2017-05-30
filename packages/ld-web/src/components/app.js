"use strict";
const React = require("react");
const division_table_1 = require("./division-table");
const flux_1 = require("flux");
var PropTypes = React.PropTypes;
const fixture_table_1 = require("./fixture-table");
class App extends React.Component {
    getChildContext() {
        return {
            actionDispatcher: this.props.actionDispatcher
        };
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("table", null,
                React.createElement("tbody", null,
                    React.createElement("tr", null,
                        React.createElement("td", null,
                            React.createElement(division_table_1.DivisionTable, { teamStatusList: this.props.divisionTableProps.teamStatusList, teams: this.props.teams, tableStatus: this.props.tableStatus })),
                        React.createElement("td", null,
                            React.createElement(fixture_table_1.FixtureTable, { matchResults: this.props.matchResults, teamName: this.props.displayFixtureOf, tableStatus: this.props.tableStatus })))))));
    }
}
App.childContextTypes = {
    actionDispatcher: PropTypes.instanceOf(flux_1.Dispatcher).isRequired
};
exports.App = App;
//# sourceMappingURL=app.js.map