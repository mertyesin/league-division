import {Team} from "ld/model";
import {TeamStatus} from "ld/model";

interface DivisionTableProps {
    teamStatusList: TeamStatus[],
    teams: Team[]
}

export {
    DivisionTableProps
}