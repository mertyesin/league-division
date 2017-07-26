#!/usr/bin/env node
"use strict";
var fs = require("fs-extra");
var dir = './tmp';
if (!fs.existsSync(dir)) {
    fs.mkdirpSync(dir);
}
var matchResults = new Array(379);
var matchResults2 = new Array(379);
var count = 0;
var england_premier_league_teams = require("../england-premier-league.json");
var spain_laliga_teams = require("../spain-laliga.json");
var england_championship_teams = require("../england-championship.json");
for (var i = 0; i < 20; i++) {
    var homeTeamName = england_premier_league_teams[i].name;
    var awayTeamName = void 0;
    for (var j = 0; j < 20; j++) {
        if (i == j) {
            continue;
        }
        else {
            awayTeamName = england_premier_league_teams[j].name;
        }
        matchResults[count] = {
            "homeTeamName": homeTeamName,
            "awayTeamName": awayTeamName,
            "homeGoals": Math.floor((Math.random() * 5)),
            "awayGoals": Math.floor((Math.random() * 5))
        };
        count++;
    }
    fs.writeFileSync("./tmp/england-premier-league-match-results.json", JSON.stringify(matchResults, undefined, 2), { encoding: "utf-8" });
}
count = 0; // for second match results
for (var i = 0; i < 20; i++) {
    var homeTeamName = spain_laliga_teams[i].name;
    var awayTeamName = void 0;
    for (var j = 0; j < 20; j++) {
        if (i == j) {
            continue;
        }
        else {
            awayTeamName = spain_laliga_teams[j].name;
        }
        matchResults2[count] = {
            "homeTeamName": homeTeamName,
            "awayTeamName": awayTeamName,
            "homeGoals": Math.floor((Math.random() * 5)),
            "awayGoals": Math.floor((Math.random() * 5))
        };
        count++;
    }
    fs.writeFileSync("./tmp/spain-laliga-match-results.json", JSON.stringify(matchResults2, undefined, 2), { encoding: "utf-8" });
}
count = 0; // for third match results
for (var i = 0; i < 20; i++) {
    var homeTeamName = england_championship_teams[i].name;
    var awayTeamName = void 0;
    for (var j = 0; j < 20; j++) {
        if (i == j) {
            continue;
        }
        else {
            awayTeamName = england_championship_teams[j].name;
        }
        matchResults2[count] = {
            "homeTeamName": homeTeamName,
            "awayTeamName": awayTeamName,
            "homeGoals": Math.floor((Math.random() * 5)),
            "awayGoals": Math.floor((Math.random() * 5))
        };
        count++;
    }
    fs.writeFileSync("./tmp/england-championship-match-results.json", JSON.stringify(matchResults2, undefined, 2), { encoding: "utf-8" });
}
