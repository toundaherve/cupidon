import { Friend } from "./Friend";

export interface Match {
  friends: Array<Friend>;
  activity: Array<Activity>;
}

export interface Activity {
  friend: Friend;
  hasStartedInteracting: boolean;
  hasSeenNotification: boolean;
  hasReceivedNotification: boolean;
  lastIteractionTime: string;
}

export function createMatch(friend1: Friend, friend2: Friend): Match {
  return {
    friends: [friend1, friend2],
    activity: [createActivity(friend1), createActivity(friend2)],
  };
}

function createActivity(friend: Friend): Activity {
  return {
    friend,
    hasReceivedNotification: false,
    hasSeenNotification: false,
    hasStartedInteracting: false,
    lastIteractionTime: "N/A",
  };
}
