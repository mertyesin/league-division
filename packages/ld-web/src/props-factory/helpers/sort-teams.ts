import {TeamStatus} from "ld/model";

function sortTeams(teamStatusList: TeamStatus[], orderBy: string) {
    switch (orderBy) {
        case "Points":
            return teamStatusList.sort(function (a, b) {
                if (a.points === b.points && a.difference === b.difference) {
                    return b.goalsFor - a.goalsFor;
                }
                else if (a.points === b.points) {
                    return b.difference - a.difference;
                }
                else {
                    return b.points - a.points;
                }
            });
        case "GF":
            return teamStatusList.sort(function (a, b) {
                if (a.points === b.points && a.difference === b.difference) {
                    return b.points - a.points;
                }
                else if (a.points === b.points) {
                    return b.difference - a.difference;
                }
                else {
                    return b.goalsFor - a.goalsFor;
                }
            });
        case "GA":
            return teamStatusList.sort(function (a, b) {
                if (a.points === b.points && a.difference === b.difference) {
                    return b.points - a.points;
                }
                else if (a.points === b.points) {
                    return b.difference - a.difference;
                }
                else {
                    return b.goalsAgainst - a.goalsAgainst;
                }
            });
        case "GD":
            return teamStatusList.sort(function (a, b) {
                if (a.points === b.points && a.difference === b.difference) {
                    return b.points - a.points;
                }
                else if (a.points === b.points) {
                    return b.difference - a.difference;
                }
                else {
                    return b.difference - a.difference;
                }
            });
        case "W":
            return teamStatusList.sort(function (a, b) {
                if (a.points === b.points && a.difference === b.difference) {
                    return b.points - a.points;
                }
                else if (a.points === b.points) {
                    return b.difference - a.difference;
                }
                else {
                    return b.win - a.win;
                }
            });
        case "L":
            return teamStatusList.sort(function (a, b) {
                if (a.points === b.points && a.difference === b.difference) {
                    return b.points - a.points;
                }
                else if (a.points === b.points) {
                    return b.difference - a.difference;
                }
                else {
                    return b.lost - a.lost;
                }
            });
        case "D":
            return teamStatusList.sort(function (a, b) {
                if (a.points === b.points && a.difference === b.difference) {
                    return b.points - a.points;
                }
                else if (a.points === b.points) {
                    return b.difference - a.difference;
                }
                else {
                    return b.drawn - a.drawn;
                }
            });
    }
}
export {
    sortTeams
}