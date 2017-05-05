import * as React from "react";
import * as ReactDOM from "react-dom";

import {App} from "./App";
import {Team} from "../model";
import {MatchResult} from "../model";
import {createDivisionTableProps} from "../props-factory";

const teams: Team[] = require("../../../teams.json"),
    matchResults: MatchResult[] = require("../../../match-results.json");

const divisionTableProps = createDivisionTableProps(teams, matchResults);

ReactDOM.render(
        <App divisionTableProps={divisionTableProps}/>
        ,document.getElementById('premier-league')
);
