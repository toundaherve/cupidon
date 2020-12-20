import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { context } from "../App";
import MatchData from "./Match";

const Matches = () => {
  const { state } = useContext(context);

  return (
    <div className="matches">
      <h1 className="matches-title">My Matches</h1>
      <Link to="/create-match" className="matches-create-new">
        Create a match
      </Link>
      <ul className="matches-list">
        {state.matches.map((matchData, idx) => {
          return (
            <li className="matches-list-item" key={idx}>
              <Link to={`/match/${idx}`}>
                <MatchData matchData={matchData} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Matches;
