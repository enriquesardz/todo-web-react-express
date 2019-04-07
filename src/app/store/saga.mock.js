import { take, put, select, all } from "redux-saga/effects";

import * as types from "./mutations/constants";
import * as mutations from "./mutations";

import uuid from "uuid";

export function* taskCreationSaga() {
  while (true) {
    const { groupId } = yield take(types.REQUEST_TASK_CREATION);
    const ownerId = "U1";
    const taskId = uuid();
    const name = `Task ${taskId} in ${groupId} by ${ownerId}`;
    yield put(mutations.createTask(taskId, groupId, ownerId, name));
  }
}

export default function* rootSaga() {
  yield all([taskCreationSaga()]);
}
