"use strict";
const React = require("react");
class FixtureTable extends React.Component {
    render() {
        return (React.createElement("div", null,
            React.createElement("table", { className: "fixtureTable" },
                React.createElement("tbody", null,
                    React.createElement("tr", null,
                        React.createElement("th", null, "Matches"))),
                React.createElement("tbody", null, this.props.matchResults.filter(m => m.homeTeamName === this.props.teamName || m.awayTeamName === this.props.teamName).map((t, i) => React.createElement("tr", { key: i },
                    React.createElement("td", null, t.homeTeamName + " " + t.homeGoals + "-" + t.awayGoals + " " + t.awayTeamName)))))));
    }
}
exports.FixtureTable = FixtureTable;
//# sourceMappingURL=fixture-table.js.map