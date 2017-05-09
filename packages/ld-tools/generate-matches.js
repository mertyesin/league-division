"use strict";
var fs = require("fs");
var matchResults = new Array(379);
var count = 0;
var teams = require("../ld-tools/teams.json");
for (var i = 0; i < 20; i++) {
    var homeTeamName = teams[i].name;
    var awayTeamName = void 0;
    for (var j = 0; j < 20; j++) {
        if (i == j) {
            continue;
        }
        else {
            awayTeamName = teams[j].name;
        }
        matchResults[count] = {
            "homeTeamName": homeTeamName,
            "awayTeamName": awayTeamName,
            "homeGoals": Math.floor((Math.random() * 5)),
            "awayGoals": Math.floor((Math.random() * 5))
        };
        count++;
    }
    fs.writeFileSync("match-results.json", JSON.stringify(matchResults, undefined, 2), { encoding: "utf-8" });
}
