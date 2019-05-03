import * as types from "./constants";

export const requestTaskCreation = groupId => ({
  type: types.REQUEST_TASK_CREATION,
  groupId
});

export const createTask = (taskId, groupId, ownerId, name) => ({
  type: types.CREATE_TASK,
  taskId,
  groupId,
  ownerId,
  name
});

export const setTaskCompletion = (taskId, isComplete) => ({
  type: types.SET_TASK_COMPLETE,
  taskId,
  isComplete
});

export const setTaskName = (taskId, name) => ({
  type: types.SET_TASK_NAME,
  taskId,
  name
});

export const setTaskGroup = (taskId, group) => ({
  type: types.SET_TASK_GROUP,
  taskId,
  group
});
