import {Team} from "../model/team";
import {MatchResult} from "../model/match-result";
import {DivisionTableProps} from "../props/division-table-props";
import {TeamStatus} from "../model/team-status";
import {sortTeams} from "./helpers/sort-teams";

function createDivisionTableProps(teams: Team[], matchResults: MatchResult[]): DivisionTableProps {

    const teamStatusList: TeamStatus[] = _createTeamStatusList(teams,matchResults),
        sortedTeamStatusList: TeamStatus[] = sortTeams(teamStatusList);

    return {
        teamStatusList: sortedTeamStatusList
    };
}

function _createTeamStatusList(teams: Team[], matchResults: MatchResult[]): TeamStatus[] {

    return teams.map(t => {
        const teamMatchResults: MatchResult[] = matchResults.filter(m => m.homeTeamName === t.name || m.awayTeamName === t.name);
        return _createTeamStatus(t.name, teamMatchResults)
    });
}

function _createTeamStatus(teamName: string, teamMatchResults: MatchResult[]): TeamStatus {

    let played=0,
        win=0,
        drawn=0,
        lost=0,
        goalsFor=0,
        goalsAgainst=0,
        difference=0,
        points=0;

    for(let i=0; teamMatchResults.length > i ; i++) {

        // home and winner
        if (teamMatchResults[i].homeGoals > teamMatchResults[i].awayGoals && teamMatchResults[i].homeTeamName === teamName) {
            played = played + 1;
            win = win + 1;
            goalsFor = goalsFor + teamMatchResults[i].homeGoals;
            goalsAgainst = goalsAgainst + teamMatchResults[i].awayGoals;
            difference = goalsFor - goalsAgainst;
            points = points + 3;
        }
        // home and loser
        else if (teamMatchResults[i].homeGoals < teamMatchResults[i].awayGoals && teamMatchResults[i].homeTeamName === teamName) {
            played = played + 1;
            lost = lost + 1;
            goalsFor = goalsFor + teamMatchResults[i].homeGoals;
            goalsAgainst = goalsAgainst + teamMatchResults[i].awayGoals;
            difference = goalsFor - goalsAgainst;
        }
        // away and winner
        else if (teamMatchResults[i].homeGoals < teamMatchResults[i].awayGoals && teamMatchResults[i].awayTeamName === teamName) {
            played = played + 1;
            win = win + 1;
            goalsFor = goalsFor + teamMatchResults[i].awayGoals;
            goalsAgainst = goalsAgainst + teamMatchResults[i].homeGoals;
            difference = goalsFor - goalsAgainst;
            points = points + 3;
        }
        // away and loser
        else if (teamMatchResults[i].homeGoals > teamMatchResults[i].awayGoals && teamMatchResults[i].awayTeamName === teamName) {
            played = played + 1;
            lost = lost + 1;
            goalsFor = goalsFor + teamMatchResults[i].awayGoals;
            goalsAgainst = goalsAgainst + teamMatchResults[i].homeGoals;
            difference = goalsFor - goalsAgainst;
        }
        //drawn
        else {
            played = played + 1;
            drawn = drawn + 1;
            goalsFor = goalsFor + teamMatchResults[i].awayGoals; // Away or Home no matter, because of the equality of goal counts
            goalsAgainst = goalsAgainst + teamMatchResults[i].homeGoals;
            points = points + 1;
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