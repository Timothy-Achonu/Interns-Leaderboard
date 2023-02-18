import React, { useState } from "react";

export default function Intern({ internData }) {
  const [showMoreIntern, setShowMoreIntern] = useState(false);
  function getTasksScores(tasks) {
    let points = 0;
    for (let task in tasks) {
      points += Number(tasks[task].score);
    }
    return +points.toFixed(2);
  }
  function makeTaskArray(tasks) {
    let taskArray = [];
    for (let task in tasks) {
      if(tasks[task].score) {
        taskArray.push(tasks[task]);
      }
    }
    return taskArray
  }
  return (
    <>
      <tr key={internData.id} onClick={() => setShowMoreIntern(true)}>
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
        <td className="third-break-point">
          <span>{`${internData.attendance}`}</span>
        </td>
        <td className="first-break-point">
          <span> {internData.bonus} </span>
        </td>
        <td className="first-break-point">
          <span> {internData.strikes} </span>
        </td>
        <td className="second-break-point">
          <span> {internData.appraisals.one + internData.appraisals.two} </span>
        </td>
        <td className="fourth-break-point">
          <span> {getTasksScores(internData.tasks)} </span>
        </td>
        <td>
          {" "}
          <span> {internData.powerRanking} </span>{" "}
        </td>
      </tr>
      <div
        className={`${showMoreIntern == true ? "show" : ""} bg-dark-overlay`}
      ></div>
        <div className={`${showMoreIntern == true ? "show" : ""} close`} onClick={() => setShowMoreIntern(false)}>
          x
        </div>
      <div className={`${showMoreIntern == true ? "show" : ""} intern-modal`}>

        <div className="name">
          <span> {internData.id} </span>
          <img src={internData.imgSrc} alt="profile" />{" "}
          <span>{`${internData.firstName} ${internData.lastName}`} </span>
          {/* <span>{internData.lastName}</span> */}
        </div>
        <div>
          <span> Bonus(5) </span>
          <hr></hr>
          <span>{internData.bonus}</span>
        </div>
        <div>
          <span> Strikes </span>
          <hr></hr>
          <span>{internData.strikes}</span>
        </div>
        <div>
          <span> Attendance(100%) </span>
          <hr></hr>
          <span>{internData.attendance}</span>
        </div>
       
        <div>
          <span> Appraisal 1(5) </span>
          <hr></hr>
          <span>{internData.appraisals.one}</span>
        </div>
        <div>
          <span> Appraisal 2(5) </span>
          <hr></hr>
          <span>{internData.appraisals.two}</span>
        </div>
        {/* <div>
            <span> Appraisal 3(5) </span> 
            <hr></hr>
            <span>{internData.appraisals.two}</span>
        </div> */}
        {makeTaskArray(internData.tasks).map((task, index) => {
          return (
            <div key={index}>
              <span> {`Task ${index+1}`} </span>
              <hr></hr>
              <span>{task.score}</span>
            </div>
          );
        })}
        <div> 
        <span> Power Ranking(5) </span>
          <hr></hr>
          <span> {internData.powerRanking} </span>
          
         
        
        </div>
      </div>
    </>
  );
}
