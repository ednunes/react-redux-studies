import React, { Component } from "react";
import { connect } from "react-redux";
import * as utterAction from "../actions/uttersAction";

class UttersList extends Component {
  componentWillMount() {
    this.props.getUttersAction();
  }

  uttersList() {
    if (this.props.utters !== undefined) {
      return this.props.utters.map((utter, index) => (
        <li key={"utter_list" + index}
          onClick={(e) => this.props.selectNewUtter(this.props.utters, utter._id)}>
            {utter.nameUtter}
        </li>
      ));
    }
  }

  render() {
    return (
      <div>
        <h1>Lista de Utters</h1>
        <ul>{this.uttersList()}</ul>
      </div>
    )
  }
}

const mapStateToProps = state => { return { utters: state.utters } };

const mapDispatchToProps = dispatch => ({
  getUttersAction: () => dispatch(utterAction.getUttersAction()),
  selectNewUtter: (utters, utter_id) => dispatch(utterAction.selectNewUtter(utters, utter_id))
});

export default connect(mapStateToProps, mapDispatchToProps)(UttersList);
