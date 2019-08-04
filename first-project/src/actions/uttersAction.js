import { createOrUpdateAction, getOrRemoveAction } from "./crudAction"

const API_UPDATE_DELETE_URL = "https://botflow.api.lappis.rocks/utter/";
const API_GET_ADD_URL = "https://botflow.api.lappis.rocks/project/utter/";

const GET = "get";
const CREATE = "post";
const UPDATE = "put";
const DELETE = "delete";

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


export const getUttersAction = () => {
    return getOrRemoveAction(GET, API_GET_ADD_URL);
};

export const createUtterAction = (new_utter = {}) => {
    return createOrUpdateAction(new_utter, CREATE, API_GET_ADD_URL, "Utter criada com sucesso!");
};

export const updateUtterAction = (new_utter = {}, utter_id) => {
    let url = API_UPDATE_DELETE_URL + utter_id;

    return createOrUpdateAction(new_utter, UPDATE, url, "Utter atualizada com sucesso!");
};

export const removeUtterAction = (utter_id = "") => {
    let url_delete = API_UPDATE_DELETE_URL + utter_id;

    return getOrRemoveAction(DELETE, url_delete, "Utter deletada com sucesso!");
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
