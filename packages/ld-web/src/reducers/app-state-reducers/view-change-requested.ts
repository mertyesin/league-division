import {AppState} from "ld/app-state";
import {ViewChangeRequested} from "../../actions/action";
import fetch from "node-fetch";

async function viewChangeRequested(action: ViewChangeRequested): Promise<AppState> {

    const toViewName: string = action.toViewName;

    const appStateUrl: string = 'http://localhost:5000/app-state/' + toViewName;

    var newAppState: AppState;

    try {
        newAppState = await fetch(appStateUrl, {timeout: 5000}).then(r => r.json() as any) ;
    }
    catch(err)  {
        const newErr = new Error(`error in ws, error details: match-results not found`);
        console.error(newErr);
    }

    return newAppState;
}

export {
    viewChangeRequested
}
