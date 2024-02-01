import { createStore, combineReducers } from "redux";
import {
  CounterState,
  UserState,
  SetUsernameAction,
  IncrementCounterAction,
} from "./types";

// Actions
export const incrementCounter = (): IncrementCounterAction => {
  return { type: "INCREMENT_COUNTER" };
};

export const setUsername = (username: string): SetUsernameAction => {
  return { type: "SET_USERNAME", dd: username };
};

// Reducers
const counterReducer = (
  state: CounterState = { counter: 0 },
  action: IncrementCounterAction
) => {
  switch (action.type) {
    case "INCREMENT_COUNTER":
      return { ...state, counter: state.counter + 1 };
    default:
      return state;
  }
};

const userReducer = (
  state: UserState = { username: "" },
  action: SetUsernameAction
) => {
  switch (action.type) {
    case "SET_USERNAME":
      return { ...state, username: action.dd };
    default:
      return state;
  }
};

// Combine reducers
const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

// Create the Redux store
const store = createStore(rootReducer);

export { store };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
