"use strict";
const order_change_requested_1 = require("./app-state-reducers/order-change-requested");
const team_fixture_display_requested_1 = require("./app-state-reducers/team-fixture-display-requested");
const ActionTags = require("../actions/tags");
function mainReducer(appState, action) {
    switch (action.tag) {
        case ActionTags.ORDER_CHANGE_REQUESTED:
            return order_change_requested_1.orderChangeRequested(appState, action);
        case ActionTags.TEAM_FIXTURE_DISPLAY_REQUESTED:
            return team_fixture_display_requested_1.teamFixtureDisplayRequested(appState, action);
    }
}
exports.mainReducer = mainReducer;
//# sourceMappingURL=main-reducer.js.map