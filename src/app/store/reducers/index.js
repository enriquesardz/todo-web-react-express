import { defaultState } from "../../../server/defaultState";
import * as types from "../mutations/constants";

export function tasks(tasks = defaultState.tasks, action) {
  switch (action.type) {
    case types.CREATE_TASK:
      return [
        ...tasks,
        {
          id: action.taskId,
          group: action.groupId,
          owner: action.ownerId,
          name: action.name,
          isComplete: false
        }
      ];
    case types.SET_TASK_COMPLETE:
      return tasks.map(task => {
        return task.id === action.taskId
          ? { ...task, isComplete: action.isComplete }
          : task;
      });
    case types.SET_TASK_GROUP:
      return tasks.map(task => {
        return task.id === action.taskId
          ? { ...task, group: action.group }
          : task;
      });
    case types.SET_TASK_NAME:
      return tasks.map(task => {
        return task.id === action.taskId
          ? { ...task, name: action.name }
          : task;
      });
  }
  return tasks;
}
export function comments(comments = defaultState.comments) {
  return comments;
}
export function groups(groups = defaultState.groups) {
  return groups;
}
export function users(users = defaultState.users) {
  return users;
}
