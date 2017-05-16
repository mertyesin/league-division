import {Team} from "../model/team";
import {MatchResult} from "../model";
import {DivisionTableProps} from "../props";
import {createDivisionTableProps} from "./create-division-table-props";
import {AppProps} from "../props";
import {AppState} from "../../../ld";

function createAppProps(appState: AppState): AppProps {

    const teams: Team[] = appState.teams,
        matchResults: MatchResult[] = appState.matchResults,
        orderBy: string = appState.orderBy,
        displayFixtureOf: string = appState.displayFixtureName;

    const divisionTableProps: DivisionTableProps = createDivisionTableProps(teams, matchResults, orderBy);

    return {
        divisionTableProps: divisionTableProps,
        displayFixtureOf: displayFixtureOf,
        matchResults: matchResults
    }
}

export {
    createAppProps
}
