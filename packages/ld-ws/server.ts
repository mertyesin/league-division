import * as express from "express";
import {Application, Request, Response} from "express";
import {MatchResult} from "../ld-web/src/model/";
import * as cors from "cors";

const matchResults: MatchResult[] = require("../../match-results.json");
const app: Application = express();
app.use(cors());

// TODO: klasör yarat jsonları oraya koy.teams de aynı ws de olsun.

app.get("/match-result/", function(httpRequest: Request, httpResponse: Response) {

    if (matchResults) {
        sendResponse(httpResponse, matchResults);
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