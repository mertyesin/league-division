import {AppState} from "ld/app-state";
import {TeamFixtureDisplayRequested, TableStatusChangeRequested} from "../../actions/action";

function tableStatusChangeRequested(appState: AppState, action: TableStatusChangeRequested): AppState {
    appState.tableStatus = action.newStatus;

    return appState;
}

export {
    tableStatusChangeRequested
}
