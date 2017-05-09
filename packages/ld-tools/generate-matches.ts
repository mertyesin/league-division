import * as fs from "fs";
import {MatchResult} from "../ld-web/src/model";
import {Team} from "../ld-web/src/model";

let matchResults: MatchResult[] = new Array(379);
let count: number = 0;
const teams: Team[] = require("../ld-tools/teams.json");

for(let i=0;i<20;i++){
    let homeTeamName: string = teams[i].name;
    let awayTeamName: string;
    for(let j=0;j<20;j++){
        if(i == j){
            continue;
        }
        else{
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
    fs.writeFileSync("match-results.json", JSON.stringify(matchResults, undefined, 2), {encoding: "utf-8"});
}
