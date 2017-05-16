import {Team} from "../ld-web/src/model";
import {MatchResult} from "../ld-web/src/model";

interface AppState {
    teams: Team[],
    matchResults: MatchResult[],
    orderBy: string
    displayFixtureName: string
}

export {
    AppState
}