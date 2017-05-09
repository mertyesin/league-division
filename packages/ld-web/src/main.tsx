import * as React from "react";
import * as ReactDOM from "react-dom";
import fetch from 'node-fetch';

import {App} from "./components";
import {Team, MatchResult} from "./model";
import {createDivisionTableProps} from "./props-factory/create-division-table-props";

async function main() {

    let matchResults: MatchResult[];
    let teams: Team[];

    try {
        matchResults = await fetch('http://localhost:5000/match-result/', {timeout: 5000}).then(r => r.json()) as any;
    }
    catch(err)  {
        const newErr = new Error(`error in ws, error details: match-results not found`);
        console.error(newErr);
    }

    try {
        teams = await fetch('http://localhost:5000/teams/', {timeout: 5000}).then(r => r.json()) as any;
    }
    catch(err)  {
        const newErr = new Error(`error in ws, error details: match-results not found`);
        console.error(newErr);
    }

    const divisionTableProps = createDivisionTableProps(teams, matchResults);

    ReactDOM.render(
        <App divisionTableProps={divisionTableProps}/>
        ,document.getElementById('premier-league')
    );
}

main();
