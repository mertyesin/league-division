import {TeamStatus} from "../model";
import {Team} from "../model/team";

interface DivisionTableProps {
    teamStatusList: TeamStatus[],
    teams: Team[]
}

export {
    DivisionTableProps
}