import * as assert from "assert";
import {Team} from "../src/model";
import {MatchResult} from "../src/model";

import {createDivisionTableProps} from "../src/props-factory";

const teams: Team[] = require("../../ld-tools/generate/teams.json"),
    matchResults: MatchResult[] = require("../../../tmp/match-results.json");

describe("values should be consistent- ", function() {
    it("-difference- calculation between GF and GA", function () {

        const divisionTableProps = createDivisionTableProps(teams, matchResults),
            diff = divisionTableProps.teamStatusList[0].goalsFor - divisionTableProps.teamStatusList[0].goalsAgainst;

        assert.strictEqual(
            divisionTableProps.teamStatusList[0].difference,
            diff
        );
    });

    it("second -difference- calculation between GF and GA", function () {

        const divisionTableProps = createDivisionTableProps(teams, matchResults),
            diff = divisionTableProps.teamStatusList[7].goalsFor - divisionTableProps.teamStatusList[7].goalsAgainst;

        assert.strictEqual(
            divisionTableProps.teamStatusList[7].difference,
            diff
        );
    });

    it("third -difference- calculation between GF and GA", function () {

        const divisionTableProps = createDivisionTableProps(teams, matchResults),
            diff = divisionTableProps.teamStatusList[12].goalsFor - divisionTableProps.teamStatusList[12].goalsAgainst;

        assert.strictEqual(
            divisionTableProps.teamStatusList[12].difference,
            diff
        );
    });

    it("win count calculator", function () {
        let winCounter: number = 0;

        const divisionTableProps = createDivisionTableProps(teams, matchResults);

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

    it("point calculator", function () {
        let winCounter: number = 0,
            drawnCounter: number = 0;

        const divisionTableProps = createDivisionTableProps(teams, matchResults);

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

});