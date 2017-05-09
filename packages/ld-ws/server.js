"use strict";
var express = require("express");
var cors = require("cors");
var matchResults = require("../../match-results.json");
var app = express();
app.use(cors());
// TODO: klasör yarat jsonları oraya koy.teams de aynı ws de olsun.
app.get("/match-result/", function (httpRequest, httpResponse) {
    if (matchResults) {
        sendResponse(httpResponse, matchResults);
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
