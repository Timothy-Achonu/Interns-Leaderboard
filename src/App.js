import "./App.css";
import Leaderboard from "./components/Leaderboard";
import Navbar from "./components/Navbar";
// import learningIcon from "../src/assets/Images/learning.png";
import Backend from "./internsData/Backend";
import Frontend from "./internsData/Frontend";
import ProductDesign from './internsData/ProductDesign'
import Web3 from './internsData/Web3';
import SelectOptions from "./components/SelectOptions";
import { useState } from "react";
import LearnableHeader from './assets/Images/LearnableHeader.PNG'

function App() {
 const Tracks = {
  Frontend,
  Backend,
  ProductDesign,
  Web3
 }
 const [currentTrack, setCurrentTrack] = useState(Tracks.Backend);
  return (
    <div className="App">
      <Navbar />
      <div className="everything-is-learnable-wrapper">
        <div>
          <img src={LearnableHeader} alt="motto-and-alluminis"/>
        </div>
      </div>
      <div className="main-content">
        <SelectOptions 
          Tracks={Tracks}
          setCurrentTrack={setCurrentTrack}
          currentTrack={currentTrack}
        />
        <h2>{currentTrack.track} Leaderboard</h2>
        <Leaderboard data={currentTrack} />
      </div>
    </div>
  );
}
export default App;
