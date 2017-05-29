import {Team} from "../model";
import {MatchResult} from "../model";

interface AppState {
    teams: Team[],
    matchResults: MatchResult[],
    orderBy: "P" | "W" | "L" | "D" | "GF" | "GA" | "GD" | "Points",
    displayFixtureOf: string,
    visibleLeague: string,

}

export {
    AppState
}