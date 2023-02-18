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
              <th className="third-break-point">Attendance(%)</th>
              <th className="first-break-point">Bonus(5)</th>
              <th className="first-break-point">Strikes</th>
              <th className="second-break-point">Appraisals(10)</th>
              <th className="fourth-break-point">Tasks({data.track === 'Product Design'? '110': '90'})</th>
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
