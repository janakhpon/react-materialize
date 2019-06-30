import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Taskform from "./Taskform";
import Preloader from "./Preloader";
import { getTasks } from "../actions/taskActions";

class Createtask extends Component {
  componentDidMount() {
    this.props.getTasks();
  }

  render() {
    const { posts, loading } = this.props.post;
    let postContent;

    if (posts === null || loading) {
      postContent = <Preloader />;
    } else {
      postContent = <h1>fuck</h1>;
    }

    return (
      <div className="container">
        <Taskform />
        {postContent}
      </div>
    );
  }
}

Createtask.propTypes = {
  getTasks: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getTasks }
)(Createtask);
