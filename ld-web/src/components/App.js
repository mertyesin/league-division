"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var division_table_1 = require("./division-table");
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement(division_table_1.DivisionTable, { teamStatusList: this.props.divisionTableProps.teamStatusList }));
    };
    return App;
}(React.Component));
exports.App = App;
//# sourceMappingURL=App.js.map