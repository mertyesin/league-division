import {AppState} from "ld/app-state";
import {ReloadRequested} from "../../actions/action";
import fetch from "node-fetch";

async  function reloadRequested(action: ReloadRequested): Promise<AppState>{
    let appState: AppState;

    try {
        appState = await fetch('http://localhost:5000/app-state/englandpremierleague', {timeout: 5000}).then(r => r.json() as any);
    }
    catch(err)  {
        const newErr = new Error(`error in ws, error details: match-results not found`);
        console.error(newErr);
    }

    return appState;
}

export {
    reloadRequested
}
