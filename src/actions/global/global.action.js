import { SET_LOADING, SET_NOTIFICATION, UNSET_LOADING, UNSET_NOTIFICATION } from "../../types/global.types";

export const setLoading = () => ({
    type: SET_LOADING
})

export const unsetLoading =() => ({
    type: UNSET_LOADING
})

export const setNotification = ({message, type}) => ({
    type: SET_NOTIFICATION,
    payload: {
        message, type
    }
})

export const unsetNotification = () => ({
    type: UNSET_NOTIFICATION
})