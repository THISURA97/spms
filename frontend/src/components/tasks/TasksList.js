import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getTasks } from "./TasksActions";

import Task from "./Task";

class TaskList extends Component {
  componentDidMount() {
    this.props.getTasks();
  }

  render() {

    const { tasks } = this.props.tasks;

    if (tasks.length === 0) {
      return <h2>Please add your first task</h2>;
    }

    let items = tasks.map(task => {
      return <Task key={task.id} task={task} />;
    });

    return (
      <div>
        <h2>Tasks</h2>
        {items}
      </div>
    );
  }
}

TaskList.propTypes = {
  getTasks: PropTypes.func.isRequired,
  tasks: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  tasks: state.tasks
});

export default connect(mapStateToProps, {
  getTasks
})(withRouter(TaskList));