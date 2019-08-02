export default (state, action) => {
    switch (action.type) {
        case "SET_UTTER_NAME":
            return {
                ...state,
                new_utter: {
                    ...state.new_utter,
                    nameUtter: action.utter_name
                }
            };

        case "SET_UTTER_TEXT":
            state.new_utter.utters[action.utter_position].utterText[action.text_position].text = action.text;

            return {
                ...state,
                new_utter: {
                    ...state.new_utter,
                    utters: [
                        ...state.new_utter.utters
                    ]
                }
            };

        case "ADD_UTTER_TEXT":
            state.new_utter.utters.push(action.text);

            return {
                ...state,
                new_utter: {
                    ...state.new_utter,
                    utters: [
                        ...state.new_utter.utters
                    ]
                }
            };

        case "CREATE_UTTER":
            return { ...state, text: action.text };

        case "REMOVE_UTTER":
            return { ...state, text: action.text };

        case "UPDATE_UTTER":
            return { ...state, text: action.text };

        case "GET_UTTERS":
            return { ...state, utters: action.utters };

        case "SELECT_NEW_UTTER":
            return { ...state, current_utter: action.current_utter };

        default:
            return state;
    }
};