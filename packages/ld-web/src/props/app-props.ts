import {DivisionTableProps} from "./division-table-props";
import {MatchResult} from "../model";
interface AppProps {
    divisionTableProps: DivisionTableProps
    displayFixtureOf: string,
    matchResults: MatchResult[]

}
export {
    AppProps
}