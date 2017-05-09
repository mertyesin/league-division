import * as fs from "fs";
import {MatchResult} from "../ld-web/src/model/match-result";
// match results array,bunun içine atıcaz ve json oluşturucaz json.stringfy
var matchResults = new Array(379);
var count: number = 0;

const teams = require("../../teams.json");
for(let i=0;i<20;i++){
    var homeTeamName = teams[i];
        for(let j=1;j<20;j++){
            if(i == j){
                continue;
            }
            else{
                var awayTeamName = teams[j];
            }
            matchResults[count] = homeTeamName;
            count++;

        }

    fs.writeFileSync("deneme.json", JSON.stringify(matchResults), {encoding: "utf-8"});
}
