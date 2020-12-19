import React from "react";
import { Match, Activity } from "../state/Match";
import Friend from "./Friend";

interface ActivityProp {
  activityData: Activity;
}

const Activity = (prop: ActivityProp) => {
  const { activityData } = prop;
  return (
    <div className="activity">
      <ul className="activity-list">
        <li className="activity-item">
          <h3>
            Has received notification: {activityData.hasReceivedNotification}
          </h3>
        </li>
        <li className="activity-item">
          <h3>Has seen notification: {activityData.hasSeenNotification}</h3>
        </li>
        <li className="activity-item">
          <h3>Has started interacting: {activityData.hasStartedInteracting}</h3>
        </li>
        <li className="activity-item">
          <h3>Last interaction time: {activityData.lastIteractionTime}</h3>
        </li>
      </ul>
    </div>
  );
};

interface MatchProp {
  matchData: Match;
}

const Match = (prop: MatchProp) => {
  const { matchData } = prop;
  return (
    <div className="match">
      <div className="match-friends">
        <div className="match-friend">
          <Friend friendData={matchData.friends[0]} />
          <Activity activityData={matchData.activity[0]} />
        </div>

        <div className="match-friend">
          <Friend friendData={matchData.friends[1]} />
          <Activity activityData={matchData.activity[1]} />
        </div>
      </div>
    </div>
  );
};
