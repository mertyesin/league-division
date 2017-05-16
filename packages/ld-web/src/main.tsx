import * as React from "react";
import * as ReactDOM from "react-dom";
import fetch from 'node-fetch';

import {App} from "./components";
import {createAppProps} from "./props-factory";
import {Dispatcher} from "flux";
import {AppProps} from "./props";
import {AppState} from "../../ld";
import {applyAction} from "./reducers/main-reducer";
import {Action} from "./actions/action";

async function main() {

    var appState: AppState;
    var appProps: AppProps;

    try {
        appState = await fetch('http://localhost:5000/app-state/', {timeout: 5000}).then(r => r.json()) as any;
    }
    catch(err)  {
        const newErr = new Error(`error in ws, error details: match-results not found`);
        console.error(newErr);
    }

    const actionDispatcher = new Dispatcher();

    appProps = createAppProps(appState);

    ReactDOM.render(
        <App {...appProps} actionDispatcher={actionDispatcher}/>
    /**
     * 'App' gets 'dispatcher' as props ,gives to the children as context.
     * 'App' implements getChildContext() ,children implements 'contextTypes' to require 'actionDispatcher'.
     * Components throw action with 'actionDispatcher.dispatch({})'.
     */
        ,document.getElementById('premier-league')
    );

    actionDispatcher.register((action: Action)  => {
        appState = applyAction(appState, action); // from main-reducer
        appProps = createAppProps(appState);
        ReactDOM.render(
            <App {...appProps} actionDispatcher={actionDispatcher}/>
            ,document.getElementById('premier-league')
        );
    });

}

main();
