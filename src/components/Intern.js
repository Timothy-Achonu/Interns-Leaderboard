import React from "react";

export default function Intern({ internData }) {
  function getTasksScores(tasks) {
    let points = 0;
    for (let task in tasks) {
      points += Number(tasks[task].score);
    }
    return +points.toFixed(2);
  }
  return (
    <tr key={internData.id}>
      <td className="rank">
        <span>{internData.id}</span>
      </td>
      <td className="name">
        {" "}
        <img src={internData.imgSrc} alt="profile" />{" "}
        <div>
          <span>{`${internData.firstName} ${internData.lastName}`} </span>
          {/* <span>{internData.lastName}</span> */}
        </div>
      </td>
      <td>
        <span>{`${internData.attendance}`}</span>
      </td>
      <td>
        <span> {internData.bonus} </span>
      </td>
      <td>
        <span> {internData.strikes} </span>
      </td>
      <td>
        <span> {internData.appraisals.one + internData.appraisals.two} </span>
      </td>
      <td>
        <span> {getTasksScores(internData.tasks)} </span>
      </td>
      <td>
        {" "}
        <span> {internData.powerRanking} </span>{" "}
      </td>
    </tr>
  );
}
