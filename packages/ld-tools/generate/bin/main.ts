#!/usr/bin/env node

import * as fs from "fs-extra";
import {MatchResult} from "../../../ld/model/match-result";
import {Team} from "../../../ld/model/team";

var dir = './tmp';
if (!fs.existsSync(dir)){
    fs.mkdirpSync(dir);
}

let matchResults: MatchResult[] = new Array(379);
let matchResults2: MatchResult[] = new Array(379);
let count: number = 0;
const england_premier_league_teams: Team[] = require("../england-premier-league.json");
const spain_laliga_teams: Team[] = require("../spain-laliga.json");

for (let i = 0; i < 20; i++) {
    let homeTeamName: string = england_premier_league_teams[i].name;
    let awayTeamName: string;
    for (let j = 0; j < 20; j++) {
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
    fs.writeFileSync("./tmp/england-premier-league-match-results.json", JSON.stringify(matchResults, undefined, 2), {encoding: "utf-8"});
}

count = 0; // for second match results
for (let i = 0; i < 20; i++) {
    let homeTeamName: string = spain_laliga_teams[i].name;
    let awayTeamName: string;
    for (let j = 0; j < 20; j++) {
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
    fs.writeFileSync("./tmp/spain-laliga-match-results.json", JSON.stringify(matchResults2, undefined, 2), {encoding: "utf-8"});
}