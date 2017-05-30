"use strict";
const create_division_table_props_1 = require("./create-division-table-props");
function createAppProps(appState) {
    const teams = appState.teams, matchResults = appState.matchResults, orderBy = appState.orderBy, displayFixtureOf = appState.displayFixtureOf, tableStatus = appState.tableStatus;
    const divisionTableProps = create_division_table_props_1.createDivisionTableProps(teams, matchResults, orderBy, tableStatus);
    return {
        divisionTableProps: divisionTableProps,
        displayFixtureOf: displayFixtureOf,
        matchResults: matchResults,
        tableStatus: tableStatus
    };
}
exports.createAppProps = createAppProps;
//# sourceMappingURL=create-app-props.js.map