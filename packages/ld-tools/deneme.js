"use strict";
var fs = require("fs");
// match results array,bunun içine atıcaz ve json oluşturucaz json.stringfy
var matchResults = new Array(379);
var count = 0;
var teams = require("../../teams.json");
for (var i = 0; i < 20; i++) {
    var homeTeamName = teams[i];
    for (var j = 1; j < 20; j++) {
        if (i == j) {
            continue;
        }
        else {
            var awayTeamName = teams[j];
        }
        matchResults[count] = homeTeamName;
        count++;
    }
    fs.writeFileSync("deneme.json", JSON.stringify(matchResults), { encoding: "utf-8" });
}
