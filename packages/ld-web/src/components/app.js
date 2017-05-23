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
            React.createElement(division_table_1.DivisionTable, { teamStatusList: this.props.divisionTableProps.teamStatusList }),
            React.createElement(fixture_table_1.FixtureTable, { matchResults: this.props.matchResults, teamName: this.props.displayFixtureOf })));
    }
}
App.childContextTypes = {
    actionDispatcher: PropTypes.instanceOf(flux_1.Dispatcher).isRequired
};
exports.App = App;
//# sourceMappingURL=app.js.map