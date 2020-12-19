import React, { useContext, useState } from "react";
import { Friend as FriendData } from "../state/Friend";
import { createMatch } from "../state/Match";
import Friend from "./Friend";
import { context } from "../App";

interface FriendsListProp {
  onFriendSelection: (friendData: FriendData) => void;
}

const FriendsList = (prop: FriendsListProp) => {
  const state = useContext(context);
  return (
    <div className="friends-list-container">
      <h2 className="friends-list-title">My friends</h2>
      <ul className="friends-list">
        {state.friends.map((friendData, idx) => (
          <li className="friends-list-item" key={idx}>
            <Friend friendData={friendData} />
          </li>
        ))}
      </ul>
    </div>
  );
};

interface SelectedFriendsProp {
  selectedFriendsData: Array<FriendData>;
  onSelectionValidation: () => void;
}

const SelectedFriends = (prop: SelectedFriendsProp) => {
  const { selectedFriendsData, onSelectionValidation } = prop;
  return (
    <div className="selected-friends-container">
      <h2 className="selected-friends-title">Selected Friends</h2>
      <ul className="seleted-friends-list">
        {selectedFriendsData.map((friendData) => (
          <li className="friends-list-item">
            <Friend friendData={friendData} />
          </li>
        ))}
      </ul>
      <button
        onClick={onSelectionValidation}
        className="selected-friends-validation"
      >
        Create Match
      </button>
    </div>
  );
};

const MatchCreation = () => {
  const state = useContext(context);

  const initialSelectedFriendsData: Array<FriendData> = [];

  const [selectedFriendsData, setSelectedFriendsData] = useState(
    initialSelectedFriendsData
  );

  function handleFriendSelection(friendData: FriendData) {
    console.log("Handling friend selection", friendData);
    setSelectedFriendsData([...selectedFriendsData, friendData]);
  }

  function handleMatchCreation() {
    console.log("Handling match creation", selectedFriendsData);
    const newMatch = createMatch(
      selectedFriendsData[0],
      selectedFriendsData[1]
    );
    state.matches.push(newMatch);
  }

  return (
    <div className="match-creation-container">
      <h1 className="match-creation-title">Create a match</h1>
      <SelectedFriends
        selectedFriendsData={selectedFriendsData}
        onSelectionValidation={handleMatchCreation}
      />
      <FriendsList onFriendSelection={handleFriendSelection} />
    </div>
  );
};

export default MatchCreation;
