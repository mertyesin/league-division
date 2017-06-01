import {Team} from "ld/model";
import {MatchResult} from "ld/model";
import {DivisionTableProps} from "../props";
import {createDivisionTableProps} from "./create-division-table-props";
import {AppProps} from "../props";
import {AppState} from "ld";

function createAppProps(appState: AppState): AppProps {

    const teams: Team[] = appState.teams,
        matchResults: MatchResult[] = appState.matchResults,
        orderBy: string = appState.orderBy,
        displayFixtureOf: string = appState.displayFixtureOf,
        tableStatus: string = appState.tableStatus;

    const divisionTableProps: DivisionTableProps = createDivisionTableProps(teams, matchResults, orderBy, tableStatus);

    return {
        divisionTableProps: divisionTableProps,
        displayFixtureOf: displayFixtureOf,
        matchResults: matchResults,
        tableStatus: tableStatus
    }
}

export {
    createAppProps
}
