import axios from "axios";
const apiAddGetUrl = "https://botflow.api.lappis.rocks/project/utter/";
const apiUpdateDeletetUrl = "https://botflow.api.lappis.rocks/utter/";

export const addUtterAction = (new_utter) => {
    return (dispatch) => {
        return axios.post(apiAddGetUrl, new_utter)
            .then(response => {
                dispatch(addUtterSuccess());
                dispatch(getUttersAction());
            })
            .catch(error => {
                throw (error);
            });
    }
};

export const addUtterSuccess = () => {
    return {
        type: "ADD_UTTER",
        text: "Utter adicionada com sucesso!",
    }
};

export const updateUtterAction = (new_utter) => {
    return (dispatch) => {
        return axios.put(apiUpdateDeletetUrl, new_utter)
            .then(response => {
                dispatch(updateUtterSuccess());
                dispatch(getUttersAction());
            })
            .catch(error => {
                throw (error);
            });
    }
};

export const updateUtterSuccess = () => {
    return {
        type: "UPDATE_UTTER",
        text: "Utter atualizada com sucesso!",
    }
};

export const removeUtterAction  = (utter_id) => {
    let url_delete = apiUpdateDeletetUrl + utter_id;
    
    return (dispatch) => {
        return axios.delete(url_delete)
            .then(response => {
                dispatch(removeUtterSucess())
                dispatch(getUttersAction());
            })
            .catch(error => {
                throw (error);
            });
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

export const getUtters = (utters) => {
    return {
        type: "GET_UTTERS",
        utters: utters
    }
};