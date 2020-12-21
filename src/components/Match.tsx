import React from "react";
import { Match as MatchData, Activity as ActivityData } from "../state/Match";
import Friend from "./Friend";

interface ActivityProp {
  activityData: ActivityData;
}

const Activity = (prop: ActivityProp) => {
  const { activityData } = prop;
  return (
    <div className="activity">
      <ul className="activity-list">
        <li className="activity-item">
          <p>
            Has received notification: {activityData.hasReceivedNotification}
          </p>
        </li>
        <li className="activity-item">
          <p>Has seen notification: {activityData.hasSeenNotification}</p>
        </li>
        <li className="activity-item">
          <p>Has started interacting: {activityData.hasStartedInteracting}</p>
        </li>
        <li className="activity-item">
          <p>Last interaction time: {activityData.lastIteractionTime}</p>
        </li>
      </ul>
    </div>
  );
};

interface MatchProps {
  matchData: MatchData;
  showActivity?: boolean;
}

const Match = (props: MatchProps) => {
  const { matchData, showActivity = false } = props;
  return (
    <div className="match">
      <div className="match-friends">
        <div className="match-friend">
          <Friend friendData={matchData.friends[0]} />
          {showActivity && <Activity activityData={matchData.activity[0]} />}
        </div>

        <div className="match-friend">
          <Friend friendData={matchData.friends[1]} />
          {showActivity && <Activity activityData={matchData.activity[1]} />}
        </div>
      </div>
    </div>
  );
};

export default Match;
