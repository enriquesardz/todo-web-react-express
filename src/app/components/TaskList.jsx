import React from "react";
import { connect } from "react-redux";
import { requestTaskCreation } from "../store/mutations";
import { Link } from "react-router-dom";

export const TaskList = ({ tasks, groupName, groupId, createNewTask }) => {
  const printTasks = () => {
    return tasks.map(task => (
      <Link to={`/task/${task.id}`} key={task.id}>
        <p>{task.name}</p>
      </Link>
    ));
  };

  return (
    <div className="d-flex flex-column flex-nowrap card px-2 py-3 m-3">
      <h3>{groupName}</h3>
      <div className="flex-fill">{printTasks()}</div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => createNewTask(groupId)}
      >
        Create new task
      </button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const groupId = ownProps.groupId;
  const groupName = ownProps.groupName;
  return {
    groupName,
    groupId,
    tasks: state.tasks.filter(task => task.group === groupId)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createNewTask(groupId) {
      dispatch(requestTaskCreation(groupId));
    }
  };
};

export const ConnectedTaskList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
