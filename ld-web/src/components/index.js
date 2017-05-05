"use strict";
var React = require("react");
var ReactDOM = require("react-dom");
var App_1 = require("./App");
var props_factory_1 = require("../props-factory");
var teams = require("../../../teams.json"), matchResults = require("../../../match-results.json");
var divisionTableProps = props_factory_1.createDivisionTableProps(teams, matchResults);
ReactDOM.render(React.createElement(App_1.App, { divisionTableProps: divisionTableProps }), document.getElementById('premier-league'));
//# sourceMappingURL=index.js.map