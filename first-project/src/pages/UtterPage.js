import React, { Component } from "react";
import UttersList from "../components/UttersList";
import UtterForm from "../components/UtterForm";
import { connect } from "react-redux";
import * as utterAction from "../actions/uttersAction";

class UtterPage extends Component {
  render() {
    return (
      <div>
        <UtterForm />
        {this.props.text}
        <button onClick={() => this.props.createUtterAction(this.props.current_utter)}>Add utter</button>
        <button onClick={() => this.props.removeUtterAction(this.props.current_utter._id)}>Remove utter</button>
        <button onClick={() => this.props.updateUtterAction(this.props.current_utter, this.props.current_utter._id)}>Atualizar utter</button>
        <UttersList />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  text: state.text,
  current_utter: state.current_utter
});

const mapDispatchToProps = dispatch => ({
  createUtterAction: (new_utter) => dispatch(utterAction.createUtterAction(new_utter)),
  removeUtterAction: (utter_id) => dispatch(utterAction.removeUtterAction(utter_id)),
  updateUtterAction: (new_utter, id) => dispatch(utterAction.updateUtterAction(new_utter, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(UtterPage);
