import React, { PropsWithChildren, useContext } from "react";
import { RouteChildrenProps } from "react-router-dom";
import { context } from "../App";
import Match from "./Match";

interface Params {
  id: string;
}

const MatchDataProvider = (
  props: PropsWithChildren<RouteChildrenProps<Params>>
) => {
  const { state } = useContext(context);

  let matchID: string;

  if (props.match) {
    matchID = props.match?.params.id;
  } else {
    throw new Error("No prop match");
  }

  const matchData = state.matches.find(
    (m, index) => index === parseInt(matchID)
  );

  if (!matchData) {
    return (
      <div>
        <h2>:-( Sorry, this match does not exist !!</h2>
      </div>
    );
  }

  return <Match matchData={matchData} />;
};

export default MatchDataProvider;
