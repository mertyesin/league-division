"use strict";
var create_division_table_props_1 = require("./create-division-table-props");
function createAppProps(appState) {
    var teams = appState.teams, matchResults = appState.matchResults, orderBy = appState.orderBy;
    var divisionTableProps = create_division_table_props_1.createDivisionTableProps(teams, matchResults, orderBy);
    return {
        divisionTableProps: divisionTableProps
    };
}
exports.createAppProps = createAppProps;
//# sourceMappingURL=create-app-props.js.map