import {Team} from "../model/team";
import {AppProps} from "../props/app-props";
import {DivisionTableProps} from "../props/division-table-props";
import {createDivisionTableProps} from "./create-division-table-props";
import {MatchResult} from "../model/match-result";

// import * as fetch from "node-fetch";

function createAppProps(): AppProps {

    let matchResults: MatchResult[];
    let teams: Team[];

    const divisionTableProps: DivisionTableProps = createDivisionTableProps(teams, matchResults);

    return {
        divisionTableProps: divisionTableProps
    }
}

export {
    createAppProps
}