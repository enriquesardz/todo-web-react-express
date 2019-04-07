import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga.mock.js";
import * as reducers from "./reducers";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  combineReducers(reducers),
  applyMiddleware(createLogger(), sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
