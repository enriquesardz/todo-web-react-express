import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as mutations from "../store/mutations";

const TaskDetail = ({
  taskId,
  comments,
  task,
  isComplete,
  groups,
  setTaskCompletion,
  setTaskGroup,
  setTaskName
}) => {
  return (
    <div className="p-2">
      <div>
        <input onChange={setTaskName} value={task.name} />
      </div>

      <div>
        <button
          className="btn btn-primary"
          onClick={() => setTaskCompletion(taskId, !isComplete)}
        >
          {isComplete ? "Reopen" : "Complete"}
        </button>
      </div>

      <div>
        <select onChange={setTaskGroup} value={task.group}>
          {groups.map(group => (
            <option key={group.id} value={group.id}>
              {group.name}
            </option>
          ))}
        </select>
      </div>

      <Link to="/dashboard">
        <button className="btn btn-info">Done</button>
      </Link>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  let taskId = ownProps.match.params.id;
  let task = state.tasks.find(task => task.id === taskId);
  let groups = state.groups;
  return {
    taskId,
    task,
    groups,
    isComplete: task.isComplete
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const taskId = ownProps.match.params.id;
  return {
    setTaskCompletion(taskId, isComplete) {
      dispatch(mutations.setTaskCompletion(taskId, isComplete));
    },
    setTaskGroup(e) {
      dispatch(mutations.setTaskGroup(taskId, e.target.value));
    },
    setTaskName(e) {
      dispatch(mutations.setTaskName(taskId, e.target.value));
    }
  };
};

export const ConnectedTaskDetail = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskDetail);
