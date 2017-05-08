"use strict";
var create_division_table_props_1 = require("./create-division-table-props");
// import * as fetch from "node-fetch";
var teams = require("../../../../teams.json");
function createAppProps() {
    var matchResults;
    var divisionTableProps = create_division_table_props_1.createDivisionTableProps(teams, matchResults);
    return {
        divisionTableProps: divisionTableProps
    };
}
exports.createAppProps = createAppProps;
//# sourceMappingURL=create-app-props.js.map