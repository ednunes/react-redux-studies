import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import utterReducer from "../reducers/utterReducer";

const INITIAL_STATE = {
  text: "",
  utters: []
};

function configureStore(state = INITIAL_STATE) {
  return createStore(utterReducer, state, applyMiddleware(thunk));
}

export default configureStore;