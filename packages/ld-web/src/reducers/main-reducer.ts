import {AppState} from "ld/app-state";
import {orderChangeRequested} from "./app-state-reducers/order-change-requested";
import {teamFixtureDisplayRequested} from "./app-state-reducers/team-fixture-display-requested";
import {Action} from "../actions/action";
import * as ActionTags from "../actions/tags"
import {tableStatusChangeRequested} from "./app-state-reducers/table-status-change-requested";
import {viewChangeRequested} from "./app-state-reducers/view-change-requested";

async function mainReducer(appState: AppState, action: Action): Promise<AppState>{

    switch (action.tag) {
        case ActionTags.ORDER_CHANGE_REQUESTED:
            return orderChangeRequested(appState ,action);

        case ActionTags.TEAM_FIXTURE_DISPLAY_REQUESTED:
            return teamFixtureDisplayRequested(appState ,action);

        case ActionTags.TABLE_STATUS_CHANGE_REQUESTED:
            return tableStatusChangeRequested(appState ,action);

        case ActionTags.VIEW_CHANGE_REQUESTED:
            return await viewChangeRequested(action);

        default:
            return appState;

    }
}

export {
    mainReducer
}