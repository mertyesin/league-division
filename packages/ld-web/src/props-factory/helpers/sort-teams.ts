import {TeamStatus} from "../../model/team-status";

function sortTeams (teamStatusList: TeamStatus[]): TeamStatus[] {

    return teamStatusList.sort(function (a, b) {

        if(a.points === b.points && a.difference === b.difference){
            return b.goalsFor - a.goalsFor
        }
        else if(a.points === b.points){
             return b.difference - a.difference
        }
        else {
             return b.points - a.points;
         }

    });
}

export {
    sortTeams
}