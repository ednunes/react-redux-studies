import React, { Component } from "react";
import { connect } from "react-redux";
import { setUtterName, setUtterText, addUtterText } from "../actions/uttersAction";


class UtterForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  /*
  getUtterTexts() {
    let utters_texts = [];
    if (this.props.utters !== undefined) {
      this.props.utters.forEach((utter, utter_index) =>
        utter.utters.forEach((utter, utters_index) =>
          utters_texts = utter.utterText.map((text, text_index) => {
            return (
              <li key={"utter_text" + utter_index + utters_index + text_index}>
                <input type="text" value={text.text}
                  onChange={this.handleChange} />
              </li>
            )
          }
          )
        )
      );
    }

    return utters_texts;
  }*/

  setUtterTexts() {
    let utters_texts = [];

    if (this.props.new_utter.utters !== undefined) {
      utters_texts = this.props.new_utter.utters.map((utter_text_list, utter_index) => {
        return utter_text_list.utterText.map((utter_text, text_index) => {
          return (
            <li key={"utter_text" + text_index}>
              <input type="text" value={utter_text.text}
                onChange={(e) => this.props.setUtterText(utter_index, text_index, e.target.value)} />
            </li>
          )
        })
      });
    }

    return utters_texts;
  }

  render() {
    let utter_name = (this.props.current_utter !== undefined) ? this.props.current_utter.nameUtter : "";

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <h1>Resposta:</h1>
            <input type="text" value={this.props.new_utter.nameUtter}
              onChange={(e) => this.props.setUtterName(e.target.value)} />
          </label>
          <br />
          <label>
            <h1>Textos das respostas:</h1>
            <ul>
              {this.setUtterTexts()}
            </ul>
          </label>

          <button onClick={() => this.props.addUtterText()}>ADD MORE</button>
          <input type="submit" value="Submit" />
        </form>


        <h1>{utter_name}</h1>
        <pre>{JSON.stringify(this.props.new_utter, null, 2)}</pre>
        <pre>{JSON.stringify(this.props.current_utter, null, 2)}</pre>

      </div>
    );
  }
}

const mapStateToProps = state => { return { ...state } };

const mapDispatchToProps = dispatch => ({
  addUtterText: () => dispatch(addUtterText()),
  setUtterName: (utter_name) => dispatch(setUtterName(utter_name)),
  setUtterText: (utter_position, text_position, text) => dispatch(setUtterText(utter_position, text_position, text))
});

export default connect(mapStateToProps, mapDispatchToProps)(UtterForm);