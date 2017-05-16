import {AppState} from "ld/app-state";
import {Action} from "../actions/action";

function applyAction(appState: AppState, action: Action): AppState {
    appState.orderBy = action.newOrderBy;

    return appState;
}

export {
    applyAction
}
