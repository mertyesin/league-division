"use strict";
var express = require("express");
var cors = require("cors");
var matchResults = require("./../../tmp/match-results.json");
var teams = require("./../ld-tools/generate/teams.json");
var app = express();
app.use(cors());
app.get("/match-result/", function (httpRequest, httpResponse) {
    if (matchResults) {
        sendResponse(httpResponse, matchResults);
    }
    else {
        var newErr = "error details: match-results not found";
        sendErrorResponse(httpResponse, 500, newErr);
    }
});
app.get("/teams/", function (httpRequest, httpResponse) {
    if (teams) {
        sendResponse(httpResponse, teams);
    }
    else {
        var newErr = "error details: teams not found";
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
