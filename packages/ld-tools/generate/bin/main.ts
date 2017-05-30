#!/usr/bin/env node

import * as fs from "fs-extra";
import {MatchResult} from "../../../ld-web/src/model";
import {Team} from "../../../ld-web/src/model";

var dir = './tmp';
if (!fs.existsSync(dir)){
    fs.mkdirpSync(dir);
}

let matchResults: MatchResult[] = new Array(379);
let count: number = 0;
const teams: Team[] = require("../spain-laliga-teams.json");

for (let i = 0; i < 20; i++) {
    let homeTeamName: string = teams[i].name;
    let awayTeamName: string;
    for (let j = 0; j < 20; j++) {
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
    fs.writeFileSync("./tmp/match-results.json", JSON.stringify(matchResults, undefined, 2), {encoding: "utf-8"});
}
