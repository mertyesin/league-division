"use strict";
var create_division_table_props_1 = require("./create-division-table-props");
function createAppProps(appState) {
    var teams = appState.teams, matchResults = appState.matchResults, orderBy = appState.orderBy, displayFixtureOf = appState.displayFixtureOf, tableStatus = appState.tableStatus;
    var divisionTableProps = create_division_table_props_1.createDivisionTableProps(teams, matchResults, orderBy, tableStatus);
    return {
        divisionTableProps: divisionTableProps,
        displayFixtureOf: displayFixtureOf,
        matchResults: matchResults,
        tableStatus: tableStatus
    };
}
exports.createAppProps = createAppProps;
