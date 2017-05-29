"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const React = require("react");
const ReactDOM = require("react-dom");
const node_fetch_1 = require("node-fetch");
const components_1 = require("./components");
const props_factory_1 = require("./props-factory");
const flux_1 = require("flux");
const main_reducer_1 = require("./reducers/main-reducer");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        var appState;
        var appProps;
        try {
            appState = (yield node_fetch_1.default('http://localhost:5000/app-state/', { timeout: 5000 }).then(r => r.json()));
        }
        catch (err) {
            const newErr = new Error(`error in ws, error details: match-results not found`);
            console.error(newErr);
        }
        const actionDispatcher = new flux_1.Dispatcher();
        appProps = props_factory_1.createAppProps(appState);
        ReactDOM.render(React.createElement(components_1.App, __assign({}, appProps, { teams: appState.teams, actionDispatcher: actionDispatcher })), document.getElementById('premier-league'));
        actionDispatcher.register((action) => {
            appState = main_reducer_1.mainReducer(appState, action); // from main-reducer
            appProps = props_factory_1.createAppProps(appState);
            ReactDOM.render(React.createElement(components_1.App, __assign({}, appProps, { teams: appState.teams, actionDispatcher: actionDispatcher })), document.getElementById('premier-league'));
        });
    });
}
main();
//# sourceMappingURL=main.js.map