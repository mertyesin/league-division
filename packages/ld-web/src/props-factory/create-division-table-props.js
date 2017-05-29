"use strict";
const sort_teams_1 = require("./helpers/sort-teams");
function createDivisionTableProps(teams, matchResults, orderBy) {
    const teamStatusList = _createTeamStatusList(teams, matchResults), sortedTeamStatusList = sort_teams_1.sortTeams(teamStatusList, orderBy);
    return {
        teamStatusList: sortedTeamStatusList,
        teams: teams
    };
}
exports.createDivisionTableProps = createDivisionTableProps;
function _createTeamStatusList(teams, matchResults) {
    return teams.map(t => {
        const teamMatchResults = matchResults.filter(m => m.homeTeamName === t.name || m.awayTeamName === t.name);
        return _createTeamStatus(t.name, teamMatchResults);
    });
}
function _createTeamStatus(teamName, teamMatchResults) {
    let played = 0, win = 0, drawn = 0, lost = 0, goalsFor = 0, goalsAgainst = 0, difference = 0, points = 0;
    for (let i = 0; teamMatchResults.length > i; i++) {
        // home and winner
        if (teamMatchResults[i].homeGoals > teamMatchResults[i].awayGoals && teamMatchResults[i].homeTeamName === teamName) {
            played++;
            win++;
            goalsFor += teamMatchResults[i].homeGoals;
            goalsAgainst += teamMatchResults[i].awayGoals;
            difference = goalsFor - goalsAgainst;
            points += 3;
        }
        else if (teamMatchResults[i].homeGoals < teamMatchResults[i].awayGoals && teamMatchResults[i].homeTeamName === teamName) {
            played++;
            lost++;
            goalsFor += teamMatchResults[i].homeGoals;
            goalsAgainst += teamMatchResults[i].awayGoals;
            difference = goalsFor - goalsAgainst;
        }
        else if (teamMatchResults[i].homeGoals < teamMatchResults[i].awayGoals && teamMatchResults[i].awayTeamName === teamName) {
            played++;
            win++;
            goalsFor += teamMatchResults[i].awayGoals;
            goalsAgainst += teamMatchResults[i].homeGoals;
            difference = goalsFor - goalsAgainst;
            points += 3;
        }
        else if (teamMatchResults[i].homeGoals > teamMatchResults[i].awayGoals && teamMatchResults[i].awayTeamName === teamName) {
            played++;
            lost++;
            goalsFor += teamMatchResults[i].awayGoals;
            goalsAgainst += teamMatchResults[i].homeGoals;
            difference = goalsFor - goalsAgainst;
        }
        else {
            played++;
            drawn++;
            goalsFor += teamMatchResults[i].awayGoals; // Away or Home no matter, because of the equality of goal counts
            goalsAgainst += teamMatchResults[i].homeGoals;
            points++;
        }
    } // end of for
    return {
        name: teamName,
        played: played,
        win: win,
        drawn: drawn,
        lost: lost,
        goalsFor: goalsFor,
        goalsAgainst: goalsAgainst,
        difference: difference,
        points: points
    };
}
//# sourceMappingURL=create-division-table-props.js.map