import axios from "axios";
const apiAddGetUrl = "https://botflow.api.lappis.rocks/project/utter/";
const apiUpdateDeletetUrl = "https://botflow.api.lappis.rocks/utter/";

// Utters

export const filterUtters = (value) => {
    return {
        type: "FILTER_UTTERS",
        value: value
    }
}

export const setUtterName = (utter_name) => {
    return {
        type: "SET_UTTER_NAME",
        utter_name: utter_name
    }
}

export const createUtterAction = (new_utter = {}) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(apiAddGetUrl, new_utter);
            dispatch(createUtterSuccess());
            dispatch(getUttersAction());
        }
        catch (error) {
            throw (error);
        }
    }
};

export const createUtterSuccess = () => {
    return {
        type: "ADD_UTTER",
        text: "Utter adicionada com sucesso!",
    }
};

export const updateUtterAction = (new_utter = {}) => {
    return async (dispatch) => {
        try {
            const response = await axios.put(apiUpdateDeletetUrl, new_utter);
            dispatch(updateUtterSuccess());
            dispatch(getUttersAction());
        }
        catch (error) {
            throw (error);
        }
    }
};

export const updateUtterSuccess = () => {
    return {
        type: "UPDATE_UTTER",
        text: "Utter atualizada com sucesso!",
    }
};

export const removeUtterAction = (utter_id = "") => {
    let url_delete = apiUpdateDeletetUrl + utter_id;

    return async (dispatch) => {
        try {
            const response = await axios.delete(url_delete);
            dispatch(removeUtterSucess());
            dispatch(getUttersAction());
        }
        catch (error) {
            throw (error);
        }
    }
};

export const removeUtterSucess = () => {
    return {
        type: "REMOVE_UTTER",
        text: "Utter deletada com sucesso!"
    }
};

export const getUttersAction = () => {
    return (dispatch) => {
        return axios.get(apiAddGetUrl)
            .then(response => {
                dispatch(getUtters(response.data))
            })
            .catch(error => {
                throw (error);
            });
    }
};

export const getUtters = (utters = []) => {
    return {
        type: "GET_UTTERS",
        utters: utters
    }
};

export const selectUtter = (utters = [], utter_id = "") => {
    let utter = utters.find((utter) => utter._id === utter_id);

    return {
        type: "SELECT_UTTER",
        current_utter: utter
    }
}

// UTTER TEXT ACTIONS

export const undoTextRemotion = () => {
    return {
        type: "UNDO_TEXT_REMOTION",

    }
}

export const addUtterText = () => {
    return {
        type: "ADD_UTTER_TEXT",
        text: {
            "utterText": [
                {
                    "text": ""
                }
            ]
        }
    }
}

export const removeUtterText = (text_position) => {
    return {
        type: "REMOVE_UTTER_TEXT",
        text_position: text_position
    }
}

export const setUtterText = (utter_position, text_position, text) => {
    return {
        type: "SET_UTTER_TEXT",
        utter_position: utter_position,
        text_position: text_position,
        text: text
    }
}
