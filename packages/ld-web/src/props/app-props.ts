import {DivisionTableProps} from "./division-table-props";
import {MatchResult} from "ld/model";

interface AppProps {
    divisionTableProps: DivisionTableProps
    displayFixtureOf: string,
    matchResults: MatchResult[],
    tableStatus: string

}
export {
    AppProps
}