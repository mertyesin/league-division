"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const node_fetch_1 = require("node-fetch");
function reloadRequested(action) {
    return __awaiter(this, void 0, void 0, function* () {
        let appState;
        try {
            appState = yield node_fetch_1.default('http://localhost:5000/app-state/englandpremierleague', { timeout: 5000 }).then(r => r.json());
        }
        catch (err) {
            const newErr = new Error(`error in ws, error details: match-results not found`);
            console.error(newErr);
        }
        return appState;
    });
}
exports.reloadRequested = reloadRequested;
//# sourceMappingURL=reload-requested.js.map