import {Team} from "../model/team";
import {MatchResult} from "../model/match-result";
import {AppProps} from "../props/app-props";
import {DivisionTableProps} from "../props/division-table-props";
import {createDivisionTableProps} from "./create-division-table-props";

const teams: Team[] = require("../../../teams.json");
const matchResults: MatchResult[] = require("../../../match-results.json");

function createAppProps(): AppProps {

    const divisionTableProps: DivisionTableProps = createDivisionTableProps(teams, matchResults);

    return {
        divisionTableProps: divisionTableProps
    }
}

export {
    createAppProps
}