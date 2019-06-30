import React, { Component } from "react";
import PropTypes from "prop-types";
import Taskitem from "./Taskitem";

class TaskFeed extends Component {
  render() {
    const { posts } = this.props;

    return posts.map(post => <Taskitem key={post._id} post={post} />);
  }
}

TaskFeed.propTypes = {
  Tasks: PropTypes.array.isRequired
};

export default TaskFeed;
