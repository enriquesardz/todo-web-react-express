import React from "react";
import { connect } from "react-redux";
import { ConnectedTaskList } from "./TaskList";

const Dashboard = ({ groups }) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div className="d-flex flex-row flex-wrap justify-content-around">
        {groups.map((group, index) => (
          <ConnectedTaskList
            key={group.id}
            groupId={group.id}
            groupName={group.name}
          />
        ))}
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    groups: state.groups
  };
}

export const ConnectedDashboard = connect(mapStateToProps)(Dashboard);
