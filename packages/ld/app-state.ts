import {Team} from "./model";
import {MatchResult} from "./model";

interface AppState {
    teams: Team[],
    matchResults: MatchResult[],
    orderBy: string
    displayFixtureOf: string,
    tableStatus: string
}

export {
    AppState
}