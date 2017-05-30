"use strict";
var express = require("express");
var cors = require("cors");
var matchResults = require("../match-results.json");
var laLigaTeams = require("../../ld-tools/generate/spain-laliga-teams.json");
var englandPremierLeagurTeams = require("../../ld-tools/generate/spain-laliga-teams.json");
var initialAppState = require("./initial-app-state.json");
var app = express();
app.use(cors());
app.get("/app-state/", function (httpRequest, httpResponse) {
    var appState = initialAppState;
    appState.matchResults = matchResults;
    appState.teams = laLigaTeams;
    appState.displayFixtureOf = laLigaTeams[0].name;
    if (initialAppState) {
        sendResponse(httpResponse, appState);
    }
    else {
        var newErr = "error details: match-results not found";
        sendErrorResponse(httpResponse, 500, newErr);
    }
});
function sendResponse(httpResponse, response) {
    httpResponse.send(response);
}
function sendErrorResponse(httpResponse, httpErrorCode, errorMessage) {
    httpResponse.status(httpErrorCode).send({ errorMessage: errorMessage });
}
app.listen(process.argv[2]);
