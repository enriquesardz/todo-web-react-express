import * as types from "./constants";

export const requestTaskCreation = groupId => ({
  type: types.REQUEST_TASK_CREATION,
  groupId
});

export const createTask = (taskId, groupId, ownerId) => ({
  type: types.CREATE_TASK,
  taskId,
  groupId,
  ownerId
});
