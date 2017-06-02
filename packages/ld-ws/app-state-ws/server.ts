import * as express from "express";
import {Application, Request, Response} from "express";
import * as cors from "cors";
import {AppState} from "ld/app-state";
import {Team} from "ld/model";
import {MatchResult} from "ld/model";

const englandPremierLeagueTeams: Team[] = require("../../ld-tools/generate/england-premier-league.json");
const englandPremierLeagueMatchResults: MatchResult[] = require("../england-premier-league-match-results.json");

const spainLaLigaTeams: Team[] = require("../../ld-tools/generate/spain-laliga.json");
const spainLaligaMatchResults: MatchResult[] = require("../spain-laliga-match-results.json");

const initialAppState: AppState = require("./initial-app-state.json");

const app: Application = express();
app.use(cors());

app.get("/app-state/:leagueName", function(httpRequest: Request, httpResponse: Response) {
    const leagueName: string = httpRequest.params.leagueName;

    var appState: AppState = initialAppState;

    switch (leagueName) {
        case "spainlaliga":
            appState.matchResults = spainLaligaMatchResults;
            appState.teams = spainLaLigaTeams;
            appState.displayFixtureOf = spainLaLigaTeams[0].name;

            if (appState) {
                sendResponse(httpResponse, appState);
            }
            else {
                const newErr = `error details: match-results not found`;
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
                const newErr = `error details: match-results not found`;
                sendErrorResponse(httpResponse, 500, newErr);
            }
    }


});

function sendResponse(httpResponse: Response, response: Object): void {
    httpResponse.send(response);
}

function sendErrorResponse(httpResponse: Response, httpErrorCode: number, errorMessage: string): void {
    httpResponse.status(httpErrorCode).send({errorMessage: errorMessage});
}

app.listen(process.argv[2]);