import {Team} from "ld/model/team";
import {MatchResult} from "ld/model/match-result";
import {DivisionTableProps} from "../props/division-table-props";
import {TeamStatus} from "ld/model/team-status";
import {sortTeams} from "./helpers/sort-teams";
// TODO : LeagueLogoPath buraya
function createDivisionTableProps(teams: Team[], matchResults: MatchResult[], orderBy: string, tableStatus: string): DivisionTableProps {

    const teamStatusList: TeamStatus[] = _createTeamStatusList(teams, matchResults, tableStatus),
        sortedTeamStatusList: TeamStatus[] = sortTeams(teamStatusList, orderBy);

    return {
        teamStatusList: sortedTeamStatusList,
        teams: teams
    };
}

function _createTeamStatusList(teams: Team[], matchResults: MatchResult[], tableStatus: string): TeamStatus[] {

    return teams.map(t => {
        const teamMatchResults: MatchResult[] = matchResults.filter(m => m.homeTeamName === t.name || m.awayTeamName === t.name);
        return _createTeamStatus(t.name, teamMatchResults, tableStatus)
    });
}
function _createTeamStatus(teamName: string, teamMatchResults: MatchResult[], tableStatus: string): TeamStatus {

    let played=0,
        win=0,
        drawn=0,
        lost=0,
        goalsFor=0,
        goalsAgainst=0,
        difference=0,
        points=0;


        if(tableStatus === "allMatches"){

            for(let i=0; teamMatchResults.length > i ; i++) {
            // home and winner
            if (teamMatchResults[i].homeGoals > teamMatchResults[i].awayGoals && teamMatchResults[i].homeTeamName === teamName) {
                played ++;
                win ++;
                goalsFor += teamMatchResults[i].homeGoals;
                goalsAgainst += teamMatchResults[i].awayGoals;
                difference = goalsFor - goalsAgainst;
                points += 3;
            }
            // home and loser
            else if (teamMatchResults[i].homeGoals < teamMatchResults[i].awayGoals && teamMatchResults[i].homeTeamName === teamName) {
                played ++;
                lost ++;
                goalsFor += teamMatchResults[i].homeGoals;
                goalsAgainst += teamMatchResults[i].awayGoals;
                difference = goalsFor - goalsAgainst;
            }
            // away and winner
            else if (teamMatchResults[i].homeGoals < teamMatchResults[i].awayGoals && teamMatchResults[i].awayTeamName === teamName) {
                played ++;
                win ++;
                goalsFor += teamMatchResults[i].awayGoals;
                goalsAgainst += teamMatchResults[i].homeGoals;
                difference = goalsFor - goalsAgainst;
                points += 3;
            }
            // away and loser
            else if (teamMatchResults[i].homeGoals > teamMatchResults[i].awayGoals && teamMatchResults[i].awayTeamName === teamName) {
                played ++;
                lost ++;
                goalsFor += teamMatchResults[i].awayGoals;
                goalsAgainst +=  teamMatchResults[i].homeGoals;
                difference = goalsFor - goalsAgainst;
            }
            //drawn
            else {
                played ++;
                drawn ++;
                goalsFor += teamMatchResults[i].awayGoals; // Away or Home no matter, because of the equality of goal counts
                goalsAgainst += teamMatchResults[i].homeGoals;
                points ++;
            }
        }
        }
        else if(tableStatus === "home") {

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
                // home and loser
                else if (teamMatchResults[i].homeGoals < teamMatchResults[i].awayGoals && teamMatchResults[i].homeTeamName === teamName) {
                    played++;
                    lost++;
                    goalsFor += teamMatchResults[i].homeGoals;
                    goalsAgainst += teamMatchResults[i].awayGoals;
                    difference = goalsFor - goalsAgainst;
                }
                //drawn
                else if (teamMatchResults[i].homeGoals === teamMatchResults[i].awayGoals && teamMatchResults[i].homeTeamName === teamName) {
                    played++;
                    drawn++;
                    goalsFor += teamMatchResults[i].awayGoals; // Away or Home no matter, because of the equality of goal counts
                    goalsAgainst += teamMatchResults[i].homeGoals;
                    points++;
                }
            }
        }
        else if(tableStatus === "away"){

            for(let i=0; teamMatchResults.length > i ; i++) {
                //away and winner
             if (teamMatchResults[i].homeGoals < teamMatchResults[i].awayGoals && teamMatchResults[i].awayTeamName === teamName) {
                played ++;
                win ++;
                goalsFor += teamMatchResults[i].awayGoals;
                goalsAgainst += teamMatchResults[i].homeGoals;
                difference = goalsFor - goalsAgainst;
                points += 3;
            }
            // away and loser
            else if (teamMatchResults[i].homeGoals > teamMatchResults[i].awayGoals && teamMatchResults[i].awayTeamName === teamName) {
                played ++;
                lost ++;
                goalsFor += teamMatchResults[i].awayGoals;
                goalsAgainst +=  teamMatchResults[i].homeGoals;
                difference = goalsFor - goalsAgainst;
            }
            //drawn
            else if (teamMatchResults[i].homeGoals === teamMatchResults[i].awayGoals && teamMatchResults[i].awayTeamName === teamName) {
                played ++;
                drawn ++;
                goalsFor += teamMatchResults[i].awayGoals; // Away or Home no matter, because of the equality of goal counts
                goalsAgainst += teamMatchResults[i].homeGoals;
                points ++;
            }
        }

    }// end of for

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

export {
    createDivisionTableProps
}