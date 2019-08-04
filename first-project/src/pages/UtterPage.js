import React, { Component } from "react";
import UttersList from "../components/UttersList";
import UtterForm from "../components/UtterForm";
import { connect } from "react-redux";
import * as utterAction from "../actions/uttersAction";

class UtterPage extends Component {
  saveData() {
    if (this.props.current_utter._id !== undefined) {
      return this.props.updateUtter(this.props.current_utter, this.props.current_utter._id);
    }

    return this.props.createUtter(this.props.current_utter);
  }
  render() {

    return (
      <div>
        <UtterForm />
        {this.props.text}
        <button onClick={() => this.saveData()}>Salvar</button>
        <button onClick={() => this.props.removeUtter(this.props.current_utter._id)}>Deletar utter</button>
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
  createUtter: (new_utter) => dispatch(utterAction.createUtter(new_utter)),
  removeUtter: (utter_id) => dispatch(utterAction.removeUtter(utter_id)),
  updateUtter: (new_utter, id) => dispatch(utterAction.updateUtter(new_utter, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(UtterPage);
