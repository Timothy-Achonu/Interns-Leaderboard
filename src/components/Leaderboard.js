import React from "react";
import Intern from "./Intern";

export default function Leaderboard({data}) {

  return (
    <>
    <div className="leaderboard-container">
          <table>
            <tbody> 
            <tr className="t-row-head">
              <th className="rank">Rank</th>
              <th>Name</th>
              <th>Attendance(%)</th>
              <th>Bonus(5)</th>
              <th>Strikes</th>
              <th>Appraisals(10)</th>
              <th>Tasks({data.track === 'Product Design'? '110': '90'})</th>
              <th>Points(3000)</th>
            </tr>
            {data.interns.map((intern) => {
        return (
           <Intern internData={intern} key={intern.id}/>
        );
      })}
            </tbody>
          </table>
        </div>
     
    </>
  );
}
