import React, { Component } from "react";
import { connect } from "react-redux";
import { addUtterAction, removeUtterAction } from "../actions/uttersAction";

class UttersList extends Component {
  uttersList() {
    return this.props.utters.map((utter, index) => (
      <li key={"utter_list" + index}>{utter.nameUtter}</li>
    ));
  }
  
  render() {
    return (
      <div>
        <h1> Lista de Utters : {this.props.text}</h1>
        <ul> {this.uttersList()} </ul>
        <button onClick={() => this.props.addUtterAction()}>Add utter</button>
        <button onClick={() => this.props.removeUtterAction()}>Remove utter</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  addUtterAction: () => dispatch(addUtterAction),
  removeUtterAction: () => dispatch(removeUtterAction)
});

export default connect(mapStateToProps, mapDispatchToProps)(UttersList);
