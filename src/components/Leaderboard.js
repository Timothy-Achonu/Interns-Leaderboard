import React from "react";

export default function Leaderboard({data}) {
  function getTasksScores(tasks) {
    let points = 0;
    for(let task in tasks) {
      points+=tasks[task].score;
      // console.log(points)
      // console.log(tasks[task])
    }
    return points
  }
  return (
    <>
      {data.interns.map((intern) => {
        return (
          <tr key={intern.id}>
            <td className="rank">
              <span>{intern.id}</span>  
            </td>
            <td className="name">
              {" "}
              <img src={intern.imgSrc} alt="profile"/>{" "}
              <div>
                <span>{intern.firstName} </span>
                <span>{intern.lastName}</span>
              </div>
            </td>
            <td>
              <span>{`${intern.attendance}`}</span>
            </td>
            <td>
              <span> {intern.bonus} </span>
            </td>
            <td>
              <span> {intern.strikes} </span>
            </td>
            <td>
              <span> {intern.appraisals.one + intern.appraisals.two} </span>
            </td>
            <td>
              <span> {getTasksScores(intern.tasks)} </span>
            </td>
            <td>
              {" "}
              <span> {intern.powerRanking} </span>{" "}
            </td>
          </tr>
        );
      })}
    </>
  );
}
