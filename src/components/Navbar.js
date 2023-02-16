import React from "react";
import LeaderboardIcon from "../assets/Images/leaderboard-icon.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="learnable-wrapper">
        <div className="learn">Learn</div>
        <div className="orange-circle-wrapper">
          <div className="orange-circle"></div>
          <span>able</span>
        </div>
      </div>
      <div className="leaderboard-icon">
        <img src={LeaderboardIcon} alt="trophy"/>
      </div>
    </nav>
  );
}
