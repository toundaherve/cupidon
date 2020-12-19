import React, { createContext, useState } from "react";
import "./App.css";
import MatchCreation from "./components/MatchCreation";

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

export const context = createContext(defaultState);

function App() {
  const [state, setState] = useState(defaultState);

  return (
    <div className="App">
      <context.Provider value={state}>
        <MatchCreation />
      </context.Provider>
    </div>
  );
}

export default App;
