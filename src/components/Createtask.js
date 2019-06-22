import React from "react";
import "jquery";
import M from "materialize-css";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";
import "./Createtask.css";
import { Collapsible, CollapsibleItem } from "react-materialize";
import logo from "../img/favicon.png";

class Createtask extends React.Component {
  componentDidMount() {
    const options = {
      onOpenStart: () => {
        console.log("Open Start");
      },
      onOpenEnd: () => {
        console.log("Open End");
      },
      onCloseStart: () => {
        console.log("Close Start");
      },
      onCloseEnd: () => {
        console.log("Close End");
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%"
    };
    M.Modal.init(this.Modal, options);

    // let instance = M.Modal.getInstance(this.Modal);
    // instance.open();
    // instance.close();
    // instance.destroy();
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col s12 m8 l9">
              <Collapsible popout>
                <CollapsibleItem
                  header="Better safe than sorry. That's my motto."
                  icon="filter_drama"
                >
                  Better safe than sorry. That's my motto.
                </CollapsibleItem>
                <CollapsibleItem
                  header="Yeah, you do seem to have a little 'shit creek' ac…"
                  icon="place"
                >
                  Yeah, you do seem to have a little 'shit creek' action going.
                </CollapsibleItem>
                <CollapsibleItem
                  header="You know, FYI, you can buy a paddle. Did you not p…"
                  icon="whatshot"
                >
                  You know, FYI, you can buy a paddle. Did you not plan for this
                  contingency?
                </CollapsibleItem>
              </Collapsible>
            </div>
            <div className="col s12 m4 l3">
              <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                  <img className="activator" src={logo} alt="" />
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">
                    Card Title
                    <i className="material-icons right">more_vert</i>
                  </span>
                  <p>
                    <a href="/">This is a link</a>
                  </p>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">
                    Card Title<i className="material-icons right">close</i>
                  </span>
                  <p>
                    Here is some more information about this product that is
                    only revealed once clicked on.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id="modal"
          className="modal"
        >
          <div className="modal-content">
            <div className="row">
              <form className="col s12">
                <div className="row">
                  <div className="input-field col s12">
                    <i className="material-icons prefix">mode_edit</i>
                    <input id="input_text" type="text" data-length="10" />
                    <label for="input_text">Input text</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <i className="material-icons prefix">mode_edit</i>
                    <textarea
                      id="icon_prefix2"
                      className="materialize-textarea"
                      data-length="120"
                    />
                    <label for="icon_prefix2">First Name</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <i className="material-icons prefix">mode_edit</i>
                    <input type="date" className="datepicker" />
                    <label for="icon_prefix2">pick a date</label>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="modal-footer">
            <button type="submit" className="waves-effect waves-green btn-flat">
              <i className="material-icons left">close</i>close
            </button>
            <a
              href="#!"
              className="modal-close waves-effect waves-green btn-flat"
            >
              {" "}
              <i className="material-icons left">close</i>close
            </a>
          </div>
        </div>

        <div className="fixed-action-btn horizontal">
          <a
            href="/"
            className="waves-effect waves-light btn-floating btn-large red modal-trigger"
            data-target="modal"
          >
            <i className="large material-icons">mode_edit</i>
            Modal
          </a>
        </div>
      </div>
    );
  }
}

export default Createtask;
