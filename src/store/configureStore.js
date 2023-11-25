import { applyMiddleware, compose, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import globalReducer from "../reducers/global.reducer";
import userReducer from "../reducers/user.reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const configureStore = () => {
  const store = createStore(
    combineReducers({
      global: globalReducer,
      user: userReducer,
    })
  );
  composeEnhancers(applyMiddleware(thunk));

  return store;
};

export default configureStore;
