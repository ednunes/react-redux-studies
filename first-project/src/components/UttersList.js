import React, { Component } from "react";
import { connect } from "react-redux";
import * as utterAction from "../actions/uttersAction";

class UttersList extends Component {
  componentWillMount() {
    this.props.getUttersAction();
  }

  uttersList() {
    if (this.props.utters !== undefined) {
      return this.props.filtered_utters.map((utter, index) => (
        <li key={"utter_list" + index}
          onClick={(e) => this.props.selectUtter(this.props.utters, utter._id)}>
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
        <input value={this.props.filter_value} onChange={(e) => this.props.filterUtters(e.target.value)} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    utters: state.utters,
    filtered_utters: state.filtered_utters
  }
};

const mapDispatchToProps = dispatch => ({
  getUttersAction: () => dispatch(utterAction.getUttersAction()),
  filterUtters: (value) => dispatch(utterAction.filterUtters(value)),
  selectUtter: (utters, utter_id) => dispatch(utterAction.selectUtter(utters, utter_id))
});

export default connect(mapStateToProps, mapDispatchToProps)(UttersList);
