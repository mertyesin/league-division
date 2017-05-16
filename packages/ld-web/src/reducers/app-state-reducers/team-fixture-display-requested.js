"use strict";
function teamFixtureDisplayRequested(appState, action) {
    appState.displayFixtureName = action.displayFixtureName;
    return appState;
}
exports.teamFixtureDisplayRequested = teamFixtureDisplayRequested;
//# sourceMappingURL=team-fixture-display-requested.js.map