"use strict";
function applyAction(appState, action) {
    appState.orderBy = action.newOrderBy;
    return appState;
}
exports.applyAction = applyAction;
//# sourceMappingURL=main-reducer.js.map