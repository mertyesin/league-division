"use strict";
function teamFixtureDisplayRequested(appState, action) {
    appState.displayFixtureOf = action.teamName;
    return appState;
}
exports.teamFixtureDisplayRequested = teamFixtureDisplayRequested;
//# sourceMappingURL=team-fixture-display-requested.js.map