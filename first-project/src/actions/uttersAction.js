import axios from "axios";
import { Utter } from '../utils/utter.js'

//const BASE = "https://botflow.api.lappis.rocks/" 
const BASE = "http://localhost:3030/"

const UTTER_URL_API_GET_DELETE = BASE + "utter/";
const UTTER_URL_API_CREATE_UPDATE = BASE + "project/utter/";

// Utters

export const getUtters = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(UTTER_URL_API_CREATE_UPDATE);
            dispatch({ type: "GET_UTTERS", utters: response.data });
        }
        catch (error) {
            throw (error);
        }
    }
};

export const createUtter = (new_utter = {}) => {
    let message = "Utter criada com sucesso!";

    return async (dispatch) => {
        try {
            const response = await axios.post(UTTER_URL_API_CREATE_UPDATE, new_utter);
            dispatch(successAction(message));
            dispatch(getUtters());
        }
        catch (error) {
            throw (error);
        }
    }
};

export const successAction = (message) => {
    return {
        type: "SUCESS_ACTION_UTTER",
        text: message,
    }
};

export const updateUtter = (new_utter = {}, utter_id) => {
    let url = UTTER_URL_API_GET_DELETE + utter_id;
    let message = "Utter atualizada com sucesso!";

    return async (dispatch) => {
        try {
            const response = await axios.put(url, new_utter);
            dispatch(successAction(message));
            dispatch(getUtters());
        }
        catch (error) {
            throw (error);
        }
    }
};

export const removeUtter = (utter_id = "") => {
    let message = "Utter removida com sucesso!";
    let url_delete = UTTER_URL_API_GET_DELETE + utter_id;

    return async (dispatch) => {
        try {
            const response = await axios.delete(url_delete);
            dispatch(successAction(message));
            dispatch(getUtters());
        }
        catch (error) {
            throw (error);
        }
    }
};

export const selectUtter = (utter_id = "") => {
    return { type: "SELECT_UTTER", utter_id: utter_id }
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
