export interface CounterState {
  counter: number;
}

export interface UserState {
  username: string;
}

// export interface RootState {
//   counter: CounterState;
//   user: UserState;
// }

export interface IncrementCounterAction {
  type: "INCREMENT_COUNTER";
}

export interface SetUsernameAction {
  type: "SET_USERNAME";
  dd: string;
}

// export type AppAction = IncrementCounterAction | SetUsernameAction;
