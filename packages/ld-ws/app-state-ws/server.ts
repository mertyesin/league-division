import * as express from "express";
import {Application, Request, Response} from "express";
import * as cors from "cors";
import {MatchResult} from "../../ld-web/src/model";
import {Team} from "../../ld-web/src/model";
import {AppState} from "ld/app-state";

const matchResults: MatchResult[] = require("../match-results.json");
const teams: Team[] = require("../../ld-tools/generate/teams.json");

const initialAppState: AppState = require("./initial-app-state.json");
const displayFixtureOf: string = initialAppState.displayFixtureOf;

const app: Application = express();
app.use(cors());

app.get("/app-state", function(httpRequest: Request, httpResponse: Response) {

    var appState: AppState = initialAppState;

    appState.matchResults = matchResults;
    appState.teams = teams;
    appState.displayFixtureOf = displayFixtureOf;

    if (initialAppState) {
        sendResponse(httpResponse, appState);
    }
    else {
        const newErr = `error details: match-results not found`;
        sendErrorResponse(httpResponse, 500, newErr);
    }
});

function sendResponse(httpResponse: Response, response: Object): void {
    httpResponse.send(response);
}

function sendErrorResponse(httpResponse: Response, httpErrorCode: number, errorMessage: string): void {
    httpResponse.status(httpErrorCode).send({errorMessage: errorMessage});
}

app.listen(process.argv[2]);