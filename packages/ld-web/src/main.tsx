import * as React from "react";
import * as ReactDOM from "react-dom";
import fetch from 'node-fetch';

import {App} from "./components";
import {createAppProps} from "./props-factory/create-app-props";
import {Dispatcher} from "flux";
import {AppProps} from "./props/app-props";
import {AppState} from "../../ld/app-state";
import {applyAction} from "./reducers/main-reducer";

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
     * App, props olarak aldigi dispatcher'i context olarak childrenlarina verecek.
     * App, getChildContext() i implement edecek, childrenlar contextTypes: da actionDispatcher'i istedigini belirtecek.
     * onclick vb event handlerlarinda ilgili componentler actionDispatcher.dispatch({}) yazarak action firlaticak.
     */
        ,document.getElementById('premier-league')
    );

    actionDispatcher.register(action  => {
        appState = applyAction(appState, action); //reducerdan geliyor.
        appProps = createAppProps(appState);
        ReactDOM.render(
            <App {...appProps} actionDispatcher={actionDispatcher}/>
            ,document.getElementById('premier-league')
        );
    });

}

main();
