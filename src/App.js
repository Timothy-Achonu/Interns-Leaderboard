import "./App.css";
import Leaderboard from "./components/Leaderboard";
import Navbar from "./components/Navbar";
import learningIcon from "../src/assets/Images/learning.png";
import Backend from "./internsData/Backend";
import Frontend from "./internsData/Frontend";
import ProductDesign from './internsData/ProductDesign'
import Web3 from './internsData/Web3';
import { useState } from "react";

function App() {
 const Tracks = {
  Frontend,
  Backend,
  ProductDesign,
  Web3
 }
 const [currentTrack, setCurrentTrack] = useState(Tracks.Frontend);
 function handleChange(e) {
   console.log(e.target.value);
   if(e.target.value === 'Frontend') {
    setCurrentTrack(Tracks.Frontend)
   }else if(e.target.value === 'Backend'){
    setCurrentTrack(Tracks.Backend)
   }else if(e.target.value === 'Web3'){
    setCurrentTrack(Tracks.Web3)
   }else if(e.target.value === 'Product Design'){
    setCurrentTrack(Tracks.ProductDesign)
   }
 }

  return (
    <div className="App">
      <Navbar />
      <div className="everything-is-learnable-wrapper">
        <div>
          Everything is learnable
          <img src={learningIcon} alt="learning-brain"/>
        </div>
      </div>
      <div className="main-content">
        <div className="select-track">
        <select onChange={handleChange}>
          
          <option>--Select Track--</option>
          <option>Frontend</option>
          <option>Backend</option>
          <option>Product Design</option>
          <option>Web3</option>
        </select>
        </div>

        <h2>{currentTrack.track} Leaderboard</h2>
        <div className="leaderboard-container">
          <table>
            <tbody> 
            <tr>
              <th className="rank">Rank</th>
              <th>Name</th>
              <th>Attendance(%)</th>
              <th>Bonus(5)</th>
              <th>Strikes</th>
              <th>Appraisals(10)</th>
              <th>Tasks({currentTrack.track === 'Product Design'? '110': '90'})</th>
              <th>Points(3000)</th>
            </tr>
            <Leaderboard data={currentTrack} />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default App;
