import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const TaskDetail = ({ taskId, comments, task, isComplete, groups }) => {
  return (
    <div className="p-2">
      <div>
        <input value={task.name} />
      </div>

      <div>
        <button className="btn btn-primary">Complete / Reopen Task</button>
      </div>

      <div>
        <select>
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

export const ConnectedTaskDetail = connect(mapStateToProps)(TaskDetail);
