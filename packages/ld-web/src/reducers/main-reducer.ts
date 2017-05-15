import {AppState} from "ld/app-state";

function applyAction(appState: AppState, action: any): AppState {
    appState.orderBy = action.newOrderBy;

    return appState;
}

export {
    applyAction
}
