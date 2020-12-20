import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Match from "./components/Match";
import MatchCreation from "./components/MatchCreation";
import MatchDataProvider from "./components/MatchDataProvider";
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

interface ContextValue {
  state: State;
  setState?: Dispatch<SetStateAction<State>>;
}

const contextValue: ContextValue = {
  state: defaultState,
};

export const context = createContext(contextValue);

function App() {
  const [state, setState] = useState(defaultState);

  return (
    <div className="App">
      <context.Provider value={{ state, setState }}>
        <BrowserRouter>
          <Route path="/" component={Header} />
          <Route path="/" exact component={Matches} />
          <Route path="/create-match" exact component={MatchCreation} />
          <Route path="/match/:id" exact component={MatchDataProvider} />
        </BrowserRouter>
      </context.Provider>
    </div>
  );
}

export default App;
