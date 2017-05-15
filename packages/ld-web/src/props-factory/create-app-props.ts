import {Team} from "../model/team";
import {MatchResult} from "../model/match-result";
import {DivisionTableProps} from "../props/division-table-props";
import {createDivisionTableProps} from "./create-division-table-props";
import {AppProps} from "../props/app-props";
import {AppState} from "../../../ld/app-state";

function createAppProps(appState: AppState): AppProps {

    const teams: Team[] = appState.teams,
        matchResults: MatchResult[] = appState.matchResults,
        orderBy: string = appState.orderBy;

    const divisionTableProps: DivisionTableProps = createDivisionTableProps(teams, matchResults, orderBy);

    return {
        divisionTableProps: divisionTableProps
    }
}

export {
    createAppProps
}
