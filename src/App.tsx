import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import "./App.css";
import MatchCreation from "./components/MatchCreation";
import Matches from "./components/Matches";

import { State } from "./state/State";

const defaultState: State = {
  matches: [],
  friends: [
    { name: "Yves", facebookID: "yvesmambo", image: "" },
    { name: "Melodia", facebookID: "mellymelo", image: "" },
    { name: "Ndjoh", facebookID: "ndjohbilly", image: "" },
    { name: "Naiska", facebookID: "naiskaeboule", image: "" },
  ],
};

interface contextValue {
  state: State;
  setState?: Dispatch<SetStateAction<State>>;
}

const contextValue: contextValue = {
  state: defaultState,
};

export const context = createContext(contextValue);

function App() {
  const [state, setState] = useState(defaultState);

  return (
    <div className="App">
      <context.Provider value={{ state, setState }}>
        <MatchCreation />
        <Matches />
      </context.Provider>
    </div>
  );
}

export default App;
