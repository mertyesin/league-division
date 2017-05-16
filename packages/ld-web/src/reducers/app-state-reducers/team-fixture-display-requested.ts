import {AppState} from "ld/app-state";
import {TeamFixtureDisplayRequested} from "../../actions/action";

function teamFixtureDisplayRequested(appState: AppState, action: TeamFixtureDisplayRequested): AppState {
    appState.displayFixtureName = action.displayFixtureName;

    return appState;
}

export {
    teamFixtureDisplayRequested
}
