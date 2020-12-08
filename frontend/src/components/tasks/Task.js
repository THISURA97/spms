import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import { deleteTask, updateTask } from "./TasksActions";

class Task extends Component {

onDeleteClick = () => {
    const { task } = this.props;
    this.props.deleteTask(task.id);
  };

    render() {
    const { task } = this.props;
    return (
      <div>
        <p>{task.content}</p>
        <Button variant="danger" size="sm" onClick={this.onDeleteClick}>
          Delete
        </Button>
      </div>
    );
  }
}

Task.propTypes = {
  task : PropTypes.object.isRequired
};
const mapStateToProps = state => ({});

export default connect(mapStateToProps, { deleteTask, updateTask })(
  withRouter(Task)
);