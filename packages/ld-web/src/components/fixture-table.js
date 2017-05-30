"use strict";
const React = require("react");
class FixtureTable extends React.Component {
    render() {
        return (React.createElement("div", { className: "table" },
            React.createElement("table", null,
                React.createElement("tbody", null,
                    React.createElement("tr", null,
                        React.createElement("th", null, "Matches"))),
                React.createElement("tbody", null,
                    this.props.tableStatus === "home" ?
                        this.props.matchResults.filter(m => m.homeTeamName === this.props.teamName).map((t, i) => React.createElement("tr", { key: i },
                            React.createElement("td", null, t.homeTeamName + " " + t.homeGoals + "-" + t.awayGoals + " " + t.awayTeamName))) : null,
                    this.props.tableStatus === "away" ?
                        this.props.matchResults.filter(m => m.awayTeamName === this.props.teamName).map((t, i) => React.createElement("tr", { key: i },
                            React.createElement("td", null, t.homeTeamName + " " + t.homeGoals + "-" + t.awayGoals + " " + t.awayTeamName))) : null,
                    this.props.tableStatus === "allMatches" ?
                        this.props.matchResults.filter(m => m.awayTeamName === this.props.teamName || m.homeTeamName === this.props.teamName).map((t, i) => React.createElement("tr", { key: i },
                            React.createElement("td", null, t.homeTeamName + " " + t.homeGoals + "-" + t.awayGoals + " " + t.awayTeamName))) : null))));
    }
}
exports.FixtureTable = FixtureTable;
//# sourceMappingURL=fixture-table.js.map