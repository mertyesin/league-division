"use strict";
var create_division_table_props_1 = require("./create-division-table-props");
var teams = require("../../../teams.json");
var matchResults = require("../../../match-results.json");
function createAppProps() {
    var divisionTableProps = create_division_table_props_1.createDivisionTableProps(teams, matchResults);
    return {
        divisionTableProps: divisionTableProps
    };
}
exports.createAppProps = createAppProps;
//# sourceMappingURL=create-app-props.js.map