"use strict";
const create_division_table_props_1 = require("./create-division-table-props");
function createAppProps(appState) {
    const teams = appState.teams, matchResults = appState.matchResults, orderBy = appState.orderBy, displayFixtureOf = appState.displayFixtureOf;
    const divisionTableProps = create_division_table_props_1.createDivisionTableProps(teams, matchResults, orderBy);
    return {
        divisionTableProps: divisionTableProps,
        displayFixtureOf: displayFixtureOf,
        matchResults: matchResults
    };
}
exports.createAppProps = createAppProps;
//# sourceMappingURL=create-app-props.js.map