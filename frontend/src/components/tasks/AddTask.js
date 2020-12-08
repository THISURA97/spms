import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { addTask } from "./TasksActions";

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onAddClick = () => {
    const task = {
      content: this.state.content
    };
    this.props.addTask(task);
  };

  render() {
    return (
      <div>
        <h2>Add new task</h2>
        <Form>
          <Form.Group controlId="contentId">
            <Form.Label>Task</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="content"
              placeholder="Enter task"
              value={this.content}
              onChange={this.onChange}
            />
          </Form.Group>
        </Form>
        <Button variant="success" onClick={this.onAddClick}>
          Add task
        </Button>
      </div>
    );
  }
}

AddTask.propTypes = {
  addNote: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { addTask })(withRouter(AddTask));