import {
  SET_LOADING,
  SET_NOTIFICATION,
  UNSET_LOADING,
  UNSET_NOTIFICATION,
} from "../types/global.types";

const defaultState = {
  loading: false,
  notification: {
    display: false,
    message: "",
    type: "",
  },
};

const globalReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case UNSET_LOADING:
      return {
        ...state,
        loading: false,
      };
    case SET_NOTIFICATION:
      const { message, type } = action.payload;
      return {
        ...state,
        notification: {
          message,
          type,
          display: true,
        },
      };
    case UNSET_NOTIFICATION:
      return {
        ...state,
        notification: {
          ...defaultState.notification,
        },
      };
    default:
      return state;
  }
};

export default globalReducer;
