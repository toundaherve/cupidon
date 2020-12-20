import React from "react";
import { Link } from "react-router-dom";

import { Friend as FriendData } from "../state/Friend";

interface FriendProps {
  friendData: FriendData;
}

const Friend = (props: FriendProps) => {
  const { friendData } = props;
  return (
    <div className="friend">
      <img className="friend-image" src={friendData.image} />
      <h3 className="friend-name">{friendData.name}</h3>
      <p className="friend-facebookID">{friendData.facebookID}</p>
    </div>
  );
};

export default Friend;
