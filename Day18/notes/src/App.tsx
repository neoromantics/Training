import { Provider } from "react-redux";
import { store } from "./store";
import IncrementButton from "./components/IncrementButton";
import SetUsernameInput from "./components/SetUsernameInput";
import DisplayUserInfo from "./components/DisplayUserInfo";

const App = () => {
  return (
    <Provider store={store}>
      <h1>Redux TypeScript App</h1>
      <IncrementButton />
      <SetUsernameInput />
      <DisplayUserInfo />
    </Provider>
  );
};

export default App;
