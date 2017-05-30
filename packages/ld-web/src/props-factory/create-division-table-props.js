"use strict";
var sort_teams_1 = require("./helpers/sort-teams");
function createDivisionTableProps(teams, matchResults, orderBy, tableStatus) {
    var teamStatusList = _createTeamStatusList(teams, matchResults, tableStatus), sortedTeamStatusList = sort_teams_1.sortTeams(teamStatusList, orderBy);
    return {
        teamStatusList: sortedTeamStatusList,
        teams: teams
    };
}
exports.createDivisionTableProps = createDivisionTableProps;
function _createTeamStatusList(teams, matchResults, tableStatus) {
    return teams.map(function (t) {
        var teamMatchResults = matchResults.filter(function (m) { return m.homeTeamName === t.name || m.awayTeamName === t.name; });
        return _createTeamStatus(t.name, teamMatchResults, tableStatus);
    });
}
function _createTeamStatus(teamName, teamMatchResults, tableStatus) {
    var played = 0, win = 0, drawn = 0, lost = 0, goalsFor = 0, goalsAgainst = 0, difference = 0, points = 0;
    if (tableStatus === "allMatches") {
        for (var i = 0; teamMatchResults.length > i; i++) {
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
        }
    }
    else if (tableStatus === "home") {
        for (var i = 0; teamMatchResults.length > i; i++) {
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
            else if (teamMatchResults[i].homeGoals === teamMatchResults[i].awayGoals && teamMatchResults[i].homeTeamName === teamName) {
                played++;
                drawn++;
                goalsFor += teamMatchResults[i].awayGoals; // Away or Home no matter, because of the equality of goal counts
                goalsAgainst += teamMatchResults[i].homeGoals;
                points++;
            }
        }
    }
    else if (tableStatus === "away") {
        for (var i = 0; teamMatchResults.length > i; i++) {
            //away and winner
            if (teamMatchResults[i].homeGoals < teamMatchResults[i].awayGoals && teamMatchResults[i].awayTeamName === teamName) {
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
            else if (teamMatchResults[i].homeGoals === teamMatchResults[i].awayGoals && teamMatchResults[i].awayTeamName === teamName) {
                played++;
                drawn++;
                goalsFor += teamMatchResults[i].awayGoals; // Away or Home no matter, because of the equality of goal counts
                goalsAgainst += teamMatchResults[i].homeGoals;
                points++;
            }
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
