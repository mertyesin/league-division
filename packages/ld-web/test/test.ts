import * as assert from "assert";

import {createDivisionTableProps} from "../src/props-factory";
import {Team} from "ld/model/team";
import {MatchResult} from "ld/model/match-result";

const teams: Team[] = require("../../ld-tools/generate/spain-laliga.json"),
    matchResults: MatchResult[] = require("../../ld-ws/spain-laliga-match-results.json"),
    orderBy: string = "W";
    var tableStatus: string = "allMatches";

describe("values should be consistent- ", function() {
    it("-difference- calculation between GF and GA", function () {

        const divisionTableProps = createDivisionTableProps(teams, matchResults, orderBy, tableStatus),
            diff = divisionTableProps.teamStatusList[0].goalsFor - divisionTableProps.teamStatusList[0].goalsAgainst;

        assert.strictEqual(
            divisionTableProps.teamStatusList[0].difference,
            diff
        );
    });

    it("second -difference- calculation between GF and GA", function () {

        const divisionTableProps = createDivisionTableProps(teams, matchResults, orderBy, tableStatus),
            diff = divisionTableProps.teamStatusList[7].goalsFor - divisionTableProps.teamStatusList[7].goalsAgainst;

        assert.strictEqual(
            divisionTableProps.teamStatusList[7].difference,
            diff
        );
    });

    it("third -difference- calculation between GF and GA", function () {

        const divisionTableProps = createDivisionTableProps(teams, matchResults, orderBy, tableStatus),
            diff = divisionTableProps.teamStatusList[12].goalsFor - divisionTableProps.teamStatusList[12].goalsAgainst;

        assert.strictEqual(
            divisionTableProps.teamStatusList[12].difference,
            diff
        );
    });

    it("win count calculator when tableStatus is set to \"allMatches\"", function () {
        let winCounter: number = 0;

        const divisionTableProps = createDivisionTableProps(teams, matchResults, orderBy, tableStatus);

        for(let i=0; i<379; i++){
            if(matchResults[i].homeTeamName === "Liverpool"){
                if(matchResults[i].homeGoals > matchResults[i].awayGoals){
                    winCounter++;
                }
            }else if(matchResults[i].awayTeamName === "Liverpool"){
                if(matchResults[i].awayGoals > matchResults[i].homeGoals){
                    winCounter++;
                }
            }
        }

        assert.strictEqual(
            divisionTableProps.teamStatusList.filter(t => t.name === "Liverpool")[0].win,
            winCounter
        );
    });

    it("point calculator when tableStatus is set to \"allMatches\" ", function () {
        let winCounter: number = 0,
            drawnCounter: number = 0;

        const divisionTableProps = createDivisionTableProps(teams, matchResults, orderBy, tableStatus);

        for(let i=0; i<379; i++){
            if(matchResults[i].homeTeamName === "Chelsea"){
                if(matchResults[i].homeGoals > matchResults[i].awayGoals){
                    winCounter++;
                }
                else if(matchResults[i].homeGoals === matchResults[i].awayGoals){
                    drawnCounter++;
                }
            }else if(matchResults[i].awayTeamName === "Chelsea"){
                if(matchResults[i].awayGoals > matchResults[i].homeGoals){
                    winCounter++;
                }
                else if(matchResults[i].homeGoals === matchResults[i].awayGoals){
                    drawnCounter++;
                }
            }
        }
        assert.strictEqual(
            divisionTableProps.teamStatusList.filter(t => t.name === "Chelsea")[0].points,
            winCounter * 3 + drawnCounter
        );
    });

    it("point calculator when tableStatus is set to \"home\" ", function () {
        tableStatus = "home";
        let winCounter: number = 0,
            drawnCounter: number = 0;

        const divisionTableProps = createDivisionTableProps(teams, matchResults, orderBy, tableStatus);

        for(let i=0; i<379; i++){
            if(matchResults[i].homeTeamName === "Everton"){
                if(matchResults[i].homeGoals > matchResults[i].awayGoals){
                    winCounter++;
                }
                else if(matchResults[i].homeGoals === matchResults[i].awayGoals){
                    drawnCounter++;
                }
            }
        }
        assert.strictEqual(
            divisionTableProps.teamStatusList.filter(t => t.name === "Everton")[0].points,
            winCounter * 3 + drawnCounter
        );
    });

    it("point calculator when tableStatus is set to \"away\" ", function () {
        tableStatus = "away";
        let winCounter: number = 0,
            drawnCounter: number = 0;

        const divisionTableProps = createDivisionTableProps(teams, matchResults, orderBy, tableStatus);

        for(let i=0; i<379; i++){
            if(matchResults[i].awayTeamName === "Manchester United"){
                if(matchResults[i].awayGoals > matchResults[i].homeGoals){
                    winCounter++;
                }
                else if(matchResults[i].awayGoals === matchResults[i].homeGoals){
                    drawnCounter++;
                }
            }
        }
        assert.strictEqual(
            divisionTableProps.teamStatusList.filter(t => t.name === "Manchester United")[0].points,
            winCounter * 3 + drawnCounter
        );
    })

});