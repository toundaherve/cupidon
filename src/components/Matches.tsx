import React, { useContext } from "react";
import { context } from "../App";
import MatchData from "./Match";

const Matches = () => {
  const { state } = useContext(context);

  return (
    <div className="matches">
      <h1 className="matches-title">My Matches</h1>
      <ul className="matches-list">
        {state.matches.map((matchData, idx) => {
          return (
            <li className="matches-list-item" key={idx}>
              <MatchData matchData={matchData} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Matches;
