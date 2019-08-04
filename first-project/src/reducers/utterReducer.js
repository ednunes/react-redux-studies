export default (state, action) => {
    switch (action.type) {
        case "FILTER_UTTERS":
            let filtered_utters = [...state.utters];
            filtered_utters = filtered_utters.filter((utter) => utter.nameUtter.includes(action.value));
            return {
                ...state,
                filtered_utters: filtered_utters
            }

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
            let new_utters = [...state.new_utter.utters];
            new_utters.push(action.text);

            return {
                ...state,
                old_utter_texts: state.new_utter.utters,
                new_utter: {
                    ...state.new_utter,
                    utters: new_utters
                }
            };

        case "REMOVE_UTTER_TEXT":
            let utters_text = [...state.new_utter.utters];
            let old_utter_history = [...utters_text];
            
            if (utters_text.length !== 1) {
                utters_text.splice(action.text_position, 1);
            }

            return {
                ...state,
                old_utter_texts: old_utter_history,
                new_utter: {
                    ...state.new_utter,
                    utters: utters_text
                }
            };

        case 'UNDO_TEXT_REMOTION':
            console.log("Undo", state.old_utter_texts)
            
            return {
                ...state,
                new_utter: {
                    ...state.new_utter,
                    utters: state.old_utter_texts
                }
            }


        case "SUCESS_ACTION_UTTER":
            return { ...state, text: action.text };

        case "GET_UTTERS":
            return { ...state, utters: action.utters, filtered_utters: action.utters };

        case "SELECT_UTTER":
            return { ...state, current_utter: action.current_utter };

        default:
            return state;
    }
};