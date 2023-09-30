import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension';


export const store = legacy_createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));