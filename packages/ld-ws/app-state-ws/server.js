"use strict";
var express = require("express");
var cors = require("cors");
var englandPremierLeagueTeams = require("../../ld-tools/generate/england-premier-league.json");
var englandPremierLeagueMatchResults = require("../england-premier-league-match-results.json");
var spainLaLigaTeams = require("../../ld-tools/generate/spain-laliga.json");
var spainLaligaMatchResults = require("../spain-laliga-match-results.json");
var initialAppState = require("./initial-app-state.json");
var app = express();
app.use(cors());
app.get("/app-state/:leagueName", function (httpRequest, httpResponse) {
    var leagueName = httpRequest.params.leagueName;
    var appState = initialAppState;
    switch (leagueName) {
        case "spainlaliga":
            appState.matchResults = spainLaligaMatchResults;
            appState.teams = spainLaLigaTeams;
            appState.displayFixtureOf = spainLaLigaTeams[0].name;
            if (appState) {
                sendResponse(httpResponse, appState);
            }
            else {
                var newErr = "error details: match-results not found";
                sendErrorResponse(httpResponse, 500, newErr);
            }
            break;
        case "englandpremierleague":
            appState.matchResults = englandPremierLeagueMatchResults;
            appState.teams = englandPremierLeagueTeams;
            appState.displayFixtureOf = englandPremierLeagueTeams[0].name;
            if (appState) {
                sendResponse(httpResponse, appState);
            }
            else {
                var newErr = "error details: match-results not found";
                sendErrorResponse(httpResponse, 500, newErr);
            }
    }
});
function sendResponse(httpResponse, response) {
    httpResponse.send(response);
}
function sendErrorResponse(httpResponse, httpErrorCode, errorMessage) {
    httpResponse.status(httpErrorCode).send({ errorMessage: errorMessage });
}
app.listen(process.argv[2]);
