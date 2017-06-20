"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const order_change_requested_1 = require("./app-state-reducers/order-change-requested");
const team_fixture_display_requested_1 = require("./app-state-reducers/team-fixture-display-requested");
const ActionTags = require("../actions/tags");
const table_status_change_requested_1 = require("./app-state-reducers/table-status-change-requested");
const view_change_requested_1 = require("./app-state-reducers/view-change-requested");
const reload_requested_1 = require("./app-state-reducers/reload-requested");
function mainReducer(appState, action) {
    return __awaiter(this, void 0, void 0, function* () {
        switch (action.tag) {
            case ActionTags.ORDER_CHANGE_REQUESTED:
                return order_change_requested_1.orderChangeRequested(appState, action);
            case ActionTags.TEAM_FIXTURE_DISPLAY_REQUESTED:
                return team_fixture_display_requested_1.teamFixtureDisplayRequested(appState, action);
            case ActionTags.TABLE_STATUS_CHANGE_REQUESTED:
                return table_status_change_requested_1.tableStatusChangeRequested(appState, action);
            case ActionTags.VIEW_CHANGE_REQUESTED:
                return yield view_change_requested_1.viewChangeRequested(action);
            case ActionTags.RELOAD_REQUESTED:
                return yield reload_requested_1.reloadRequested(action);
            default:
                return appState;
        }
    });
}
exports.mainReducer = mainReducer;
//# sourceMappingURL=main-reducer.js.map