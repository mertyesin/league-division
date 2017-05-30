"use strict";
function tableStatusChangeRequested(appState, action) {
    appState.tableStatus = action.newStatus;
    return appState;
}
exports.tableStatusChangeRequested = tableStatusChangeRequested;
//# sourceMappingURL=table-status-change-requested.js.map