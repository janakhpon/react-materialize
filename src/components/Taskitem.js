import React from "react";
import "jquery";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteTask } from "../actions/taskActions";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";
import { Collapsible, CollapsibleItem, Button } from "react-materialize";

class Taskitem extends React.Component {
  onDeleteClick(id) {
    this.props.deleteTask(id);
  }

  render() {
    const { post, auth } = this.props;
    return (
      <div classtitle="container">
        <div classtitle="row">
          <div classtitle="col s12 m12 l12">
            <Collapsible classtitle="collapsible" popout>
              <CollapsibleItem
                classtitle="teal lighten-2 collapsible-item"
                header={post.title}
                icon="filter_drama"
                style={{ background: "black" }}
              >
                {post.description} at {post.deadline}
                <div classtitle="section" />
                <hr />
                <div classtitle="row center-align">
                  {post.user === auth.user.id ? (
                    <Button
                      waves
                      onClick={this.onDeleteClick.bind(this, post._id)}
                    >
                      delete
                    </Button>
                  ) : null}

                  <Button waves onClick={this.onClear}>
                    clear
                  </Button>
                </div>
              </CollapsibleItem>
            </Collapsible>
          </div>
        </div>
      </div>
    );
  }
}

Taskitem.propTypes = {
  deleteTask: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteTask }
)(Taskitem);
