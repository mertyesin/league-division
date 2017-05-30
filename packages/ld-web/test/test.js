"use strict";
var assert = require("assert");
var props_factory_1 = require("../src/props-factory");
var teams = require("../../ld-tools/generate/england-premier-league-teams.json"), matchResults = require("../../ld-ws/match-results.json"), orderBy = "W";
var tableStatus = "allMatches";
describe("values should be consistent- ", function () {
    it("-difference- calculation between GF and GA", function () {
        var divisionTableProps = props_factory_1.createDivisionTableProps(teams, matchResults, orderBy, tableStatus), diff = divisionTableProps.teamStatusList[0].goalsFor - divisionTableProps.teamStatusList[0].goalsAgainst;
        assert.strictEqual(divisionTableProps.teamStatusList[0].difference, diff);
    });
    it("second -difference- calculation between GF and GA", function () {
        var divisionTableProps = props_factory_1.createDivisionTableProps(teams, matchResults, orderBy, tableStatus), diff = divisionTableProps.teamStatusList[7].goalsFor - divisionTableProps.teamStatusList[7].goalsAgainst;
        assert.strictEqual(divisionTableProps.teamStatusList[7].difference, diff);
    });
    it("third -difference- calculation between GF and GA", function () {
        var divisionTableProps = props_factory_1.createDivisionTableProps(teams, matchResults, orderBy, tableStatus), diff = divisionTableProps.teamStatusList[12].goalsFor - divisionTableProps.teamStatusList[12].goalsAgainst;
        assert.strictEqual(divisionTableProps.teamStatusList[12].difference, diff);
    });
    it("win count calculator when tableStatus is set to \"allMatches\"", function () {
        var winCounter = 0;
        var divisionTableProps = props_factory_1.createDivisionTableProps(teams, matchResults, orderBy, tableStatus);
        for (var i = 0; i < 379; i++) {
            if (matchResults[i].homeTeamName === "Liverpool") {
                if (matchResults[i].homeGoals > matchResults[i].awayGoals) {
                    winCounter++;
                }
            }
            else if (matchResults[i].awayTeamName === "Liverpool") {
                if (matchResults[i].awayGoals > matchResults[i].homeGoals) {
                    winCounter++;
                }
            }
        }
        assert.strictEqual(divisionTableProps.teamStatusList.filter(function (t) { return t.name === "Liverpool"; })[0].win, winCounter);
    });
    it("point calculator when tableStatus is set to \"allMatches\" ", function () {
        var winCounter = 0, drawnCounter = 0;
        var divisionTableProps = props_factory_1.createDivisionTableProps(teams, matchResults, orderBy, tableStatus);
        for (var i = 0; i < 379; i++) {
            if (matchResults[i].homeTeamName === "Chelsea") {
                if (matchResults[i].homeGoals > matchResults[i].awayGoals) {
                    winCounter++;
                }
                else if (matchResults[i].homeGoals === matchResults[i].awayGoals) {
                    drawnCounter++;
                }
            }
            else if (matchResults[i].awayTeamName === "Chelsea") {
                if (matchResults[i].awayGoals > matchResults[i].homeGoals) {
                    winCounter++;
                }
                else if (matchResults[i].homeGoals === matchResults[i].awayGoals) {
                    drawnCounter++;
                }
            }
        }
        assert.strictEqual(divisionTableProps.teamStatusList.filter(function (t) { return t.name === "Chelsea"; })[0].points, winCounter * 3 + drawnCounter);
    });
    it("point calculator when tableStatus is set to \"home\" ", function () {
        tableStatus = "home";
        var winCounter = 0, drawnCounter = 0;
        var divisionTableProps = props_factory_1.createDivisionTableProps(teams, matchResults, orderBy, tableStatus);
        for (var i = 0; i < 379; i++) {
            if (matchResults[i].homeTeamName === "Everton") {
                if (matchResults[i].homeGoals > matchResults[i].awayGoals) {
                    winCounter++;
                }
                else if (matchResults[i].homeGoals === matchResults[i].awayGoals) {
                    drawnCounter++;
                }
            }
        }
        assert.strictEqual(divisionTableProps.teamStatusList.filter(function (t) { return t.name === "Everton"; })[0].points, winCounter * 3 + drawnCounter);
    });
    it("point calculator when tableStatus is set to \"away\" ", function () {
        tableStatus = "away";
        var winCounter = 0, drawnCounter = 0;
        var divisionTableProps = props_factory_1.createDivisionTableProps(teams, matchResults, orderBy, tableStatus);
        for (var i = 0; i < 379; i++) {
            if (matchResults[i].awayTeamName === "Manchester United") {
                if (matchResults[i].awayGoals > matchResults[i].homeGoals) {
                    winCounter++;
                }
                else if (matchResults[i].awayGoals === matchResults[i].homeGoals) {
                    drawnCounter++;
                }
            }
        }
        assert.strictEqual(divisionTableProps.teamStatusList.filter(function (t) { return t.name === "Manchester United"; })[0].points, winCounter * 3 + drawnCounter);
    });
});
