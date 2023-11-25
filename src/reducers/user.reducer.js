import { LOGIN, LOGOUT } from "../types/user.types";

const defaultState = null;

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      const { token, name } = action.payload;
      return {
        isAuthenticated: true,
        token,
        name,
      };
    case LOGOUT:
      return defaultState;
    default:
      return state;
  }
};

export default userReducer;
