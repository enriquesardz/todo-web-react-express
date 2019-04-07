import { createStore, applyMiddleware } from "redux";
import { defaultState } from "../../server/defaultState";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import * as sagas from "./saga.mock.js";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(function reducer(
  state = defaultState,
  action
) {
  return state;
},
applyMiddleware(createLogger(), sagaMiddleware));

for (let saga in sagas) {
  sagaMiddleware.run(sagas[saga]);
}
