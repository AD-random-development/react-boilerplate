import { LOGIN, LOGOUT } from "../../types/user.types";

export const logout = () => ({
  type: LOGOUT,
});

export const login = ({ username, password }) => {
  return (dispatch) => {
    dispatch({
      type: LOGIN,
      payload: {
        username,
        password,
      },
    });
  };
};
