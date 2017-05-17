import {AppState} from "ld/app-state";
import {TeamFixtureDisplayRequested} from "../../actions/action";

function teamFixtureDisplayRequested(appState: AppState, action: TeamFixtureDisplayRequested): AppState {
    appState.displayFixtureOf = action.teamName;

    return appState;
}

export {
    teamFixtureDisplayRequested
}
