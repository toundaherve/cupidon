import React, { useContext, useState } from "react";
import { Friend as FriendData } from "../state/Friend";
import { createMatch } from "../state/Match";
import Friend from "./Friend";
import { context } from "../App";

interface FriendsListProps {
  onFriendSelection: (friendData: FriendData) => void;
}

const FriendsList = (props: FriendsListProps) => {
  const { state } = useContext(context);
  const { onFriendSelection } = props;
  return (
    <div className="friends-list-container">
      <h2 className="friends-list-title">My friends</h2>
      <ul className="friends-list">
        {state.friends.map((friendData, idx) => (
          <li
            className="friends-list-item"
            key={idx}
            onClick={() => onFriendSelection(friendData)}
          >
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
        {selectedFriendsData.map((friendData, idx) => (
          <li className="friends-list-item" key={idx}>
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
  const { state, setState } = useContext(context);

  const initialSelectedFriendsData: Array<FriendData> = [];

  const [selectedFriendsData, setSelectedFriendsData] = useState(
    initialSelectedFriendsData
  );

  function handleFriendSelection(friendData: FriendData) {
    setSelectedFriendsData([...selectedFriendsData, friendData]);
  }

  function handleMatchCreation() {
    const newMatch = createMatch(
      selectedFriendsData[0],
      selectedFriendsData[1]
    );

    state.matches.push(newMatch);
    if (setState) {
      setState({ ...state });
    } else {
      throw new Error("Missing setState in Context");
    }

    setSelectedFriendsData(initialSelectedFriendsData);
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
