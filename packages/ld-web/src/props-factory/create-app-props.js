"use strict";
var create_division_table_props_1 = require("./create-division-table-props");
function createAppProps(appState) {
    var teams = appState.teams, matchResults = appState.matchResults, orderBy = appState.orderBy, displayFixtureOf = appState.displayFixtureOf;
    var divisionTableProps = create_division_table_props_1.createDivisionTableProps(teams, matchResults, orderBy);
    return {
        divisionTableProps: divisionTableProps,
        displayFixtureOf: displayFixtureOf,
        matchResults: matchResults
    };
}
exports.createAppProps = createAppProps;
//# sourceMappingURL=create-app-props.js.map