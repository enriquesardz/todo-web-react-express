import { take, put, select } from "redux-saga/effects";

import * as tasks from "./mutations/constants";

import uuid from "uuid";

export default function* taskCreationSaga() {
  while (true) {
    const { groupId } = yield take(tasks.REQUEST_TASK_CREATION);
    console.log("Group Id", groupId);
  }
}
