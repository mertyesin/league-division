import {AppState} from "ld/app-state";
import {OrderChangeRequested} from "../../actions/action";

function orderChangeRequested(appState: AppState, action: OrderChangeRequested): AppState {
    appState.orderBy = action.newOrderBy;

    return appState;
}

export {
    orderChangeRequested
}
