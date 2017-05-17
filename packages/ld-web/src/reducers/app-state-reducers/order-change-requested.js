"use strict";
function orderChangeRequested(appState, action) {
    appState.orderBy = action.newOrderBy;
    return appState;
}
exports.orderChangeRequested = orderChangeRequested;
