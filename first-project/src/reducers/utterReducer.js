export default (state, action) => {
    switch (action.type) {
        case "ADD_UTTER":
            let ns = {
                ...state,
                text: action.text
            };
            return ns;
        case "REMOVE_UTTER":
            return {
                ...state,
                text: action.text,
            };
        case "UPDATE_UTTER":
            return {
                ...state,
                text: action.text,
            };
        case "GET_UTTERS":
            return { ...state, utters: action.utters };
        default:
            return state;
    }
};