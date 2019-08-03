import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import utterReducer from "../reducers/utterReducer";

const INITIAL_STATE = {
  old_utter_texts: [],
  utters: [],
  filtered_utters: [],
  filter_value: "",
  current_utter: {},
  new_utter: {
    "nameUtter": "",
    "utters": [
      {
        "utterText": [
          {
            "text": ""
          }
        ]
      }
    ]
  }
};

function configureStore(state = INITIAL_STATE) {
  return createStore(utterReducer, state, applyMiddleware(thunk));
}

export default configureStore;