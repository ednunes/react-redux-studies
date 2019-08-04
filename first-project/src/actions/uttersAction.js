import { Utter } from '../utils/utter.js'
import { createOrUpdateAction, getOrRemoveAction } from "./crudAction"

const UTTER_URL_API_GET_DELETE = "https://botflow.api.lappis.rocks/utter/";
const UTTER_URL_API_CREATE_UPDATE = "https://botflow.api.lappis.rocks/project/utter/";

const GET = "get";
const CREATE = "post";
const UPDATE = "put";
const DELETE = "delete";

// Utters

export const getUtters = () => {
    return getOrRemoveAction(GET, UTTER_URL_API_CREATE_UPDATE);
};

export const createUtter = (new_utter = {}) => {
    let message = "Utter criada com sucesso!";

    return createOrUpdateAction(new_utter, CREATE, UTTER_URL_API_CREATE_UPDATE, message, getUtters);
};

export const updateUtter = (new_utter = {}, utter_id) => {
    let url = UTTER_URL_API_GET_DELETE + utter_id;
    let message = "Utter atualizada com sucesso!";

    return createOrUpdateAction(new_utter, UPDATE, url, message, getUtters);
};

export const removeUtter = (utter_id = "") => {
    let message = "Utter atualizada com sucesso!";
    let url_delete = UTTER_URL_API_GET_DELETE + utter_id;

    return getOrRemoveAction(DELETE, url_delete, message, getUtters);
};

export const selectUtter = (utters = [], utter_id = "") => {
    let utter = utters.find((utter) => utter._id === utter_id);

    return { type: "SELECT_UTTER", current_utter: utter }
}

export const filterUtters = (value = "") => {
    return { type: "FILTER_UTTERS", value: value }
}

export const setUtterName = (utter_name = "") => {
    return { type: "SET_UTTER_NAME", utter_name: utter_name }
}

export const createNewUtter = () => {
    return { type: "CREATE_NEW_UTTER", new_utter: new Utter() }
}

// UTTER TEXT ACTIONS

export const addUtterText = () => {
    const utter = new Utter();
    return { type: "ADD_UTTER_TEXT", text: utter.utters[0] }
}

export const setUtterText = (utter_position, text_position, text) => {
    return {
        type: "SET_UTTER_TEXT",
        text: text,
        text_position: text_position,
        utter_position: utter_position
    }
}

export const removeUtterText = (text_position) => {
    return { type: "REMOVE_UTTER_TEXT", text_position: text_position }
}

export const undoTextRemotion = () => {
    return { type: "UNDO_TEXT_REMOTION" }
}