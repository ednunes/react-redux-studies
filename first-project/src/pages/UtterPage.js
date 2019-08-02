import React, { Component } from "react";
import UttersList from "../components/UttersList";
import UtterForm from "../components/UtterForm";
import { connect } from "react-redux";
import * as utterAction from "../actions/uttersAction";

class UtterPage extends Component {
  render() {
    let data = {
      "_id": "3123",
      "utters": [
        {
          "utterText": [
            {
              "text": "If they say Who cares if one more light goes out? In a sky of a million stars It flickers, flickers Who cares when someone's time runs out? If a moment is all we are We're quicker, quicker Who cares if one more light goes out? Well I do"
            }
          ]
        }
      ],
      "nameUtter": "Tcerto!",
      "projectName": "project"
    }

    return (
      <div>
        <UtterForm />
        {this.props.text}
        <button onClick={() => this.props.createUtterAction(data)}>Add utter</button>
        <button onClick={() => this.props.removeUtterAction("123")}>Remove utter</button>
        <button onClick={() => this.props.updateUtterAction("123")}>Atualizar utter</button>
        <UttersList />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  text: state.text
});

const mapDispatchToProps = dispatch => ({
  createUtterAction: (new_utter) => dispatch(utterAction.createUtterAction(new_utter)),
  removeUtterAction: (utter_id) => dispatch(utterAction.removeUtterAction(utter_id)),
  updateUtterAction: (new_utter) => dispatch(utterAction.updateUtterAction(new_utter))
});

export default connect(mapStateToProps, mapDispatchToProps)(UtterPage);
