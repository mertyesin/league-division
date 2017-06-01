import {Team} from "ld/model";
import {MatchResult} from "ld/model";

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