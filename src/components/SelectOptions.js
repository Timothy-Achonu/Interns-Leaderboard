import React from "react";
import { useState } from "react";

export default function SelectOptions(props) {
  
  
  const { Tracks, setCurrentTrack, currentTrack } = props;
  const sortingPatterns = {
    highestScore: "By highest score",
    lowestScore: "By lowest score",
    firstName: "By first name",
    lastName: "By last name",
  };
  const [patternToSort, setPatternSort] = useState(
    sortingPatterns.highestScore
  );

  function handleSelectTrack(e) {
    if (e.target.value === "Frontend") {
      handleSort("", Tracks.Frontend);
    } else if (e.target.value === "Backend") {
      handleSort("", Tracks.Backend);
    } else if (e.target.value === "Web3") {
      handleSort("", Tracks.Web3);
    } else if (e.target.value === "Product Design") {
      handleSort("", Tracks.ProductDesign);
    }
  }

  //Sorting functions
  function sortByLowest(track) {
    let newArray = [];
    let arrToChange = [];
    for (let arr of track.interns) {
      arrToChange.push(arr);
    }
    arrToChange.forEach((intern, index) => {
      let lowestRankingIntern = intern;
      let lowestScore = intern.powerRanking;
      let internIndex = index;
      for (let i = 0; i < arrToChange.length; i++) {
        if (lowestScore > arrToChange[i].powerRanking) {
          lowestScore = arrToChange[i].powerRanking;
          internIndex = i;
          lowestRankingIntern = arrToChange[i];
        }
      }
      let recentlyAdded = {
        ...lowestRankingIntern,
        id: arrToChange.length - index,
        // id: 1+1,
      };
      newArray.push(recentlyAdded);
      arrToChange[internIndex] = {
        ...lowestRankingIntern,
        powerRanking: Infinity,
      };
    });
    setCurrentTrack({
      track: track.track,
      interns: newArray,
    });
    console.log("sort track by lowest");
  }
  //Sort by highest
  function sortByHighest(track) {
    let newArray = [];
    let arrToChange = [];
    for (let arr of track.interns) {
      arrToChange.push(arr);
    }
    arrToChange.forEach((intern, index) => {
      let highestRankingIntern = intern;
      let highestScore = intern.powerRanking;
      let internIndex = index;
      for (let i = 0; i < arrToChange.length; i++) {
        if (highestScore < arrToChange[i].powerRanking) {
          highestScore = arrToChange[i].powerRanking;
          internIndex = i;
          highestRankingIntern = arrToChange[i];
        }
      }
      let recentlyAdded = {
        ...highestRankingIntern,
        id: index + 1,
        // id: 1+1,
      };
      newArray.push(recentlyAdded);
            arrToChange[internIndex] = {
        ...highestRankingIntern,
        powerRanking: -Infinity,
      };
    });
    setCurrentTrack({
      track: track.track,
      interns: newArray,
    });
    console.log("sort track by highest");
  }

  //CHECK STR FUNC
  function checkStr(str) {
    let newStr = '';
    for(let char of str) {
      if(char.toLowerCase() >= 'a')  {
        newStr += char
    }
    }
     return newStr
  }

   //Sort by firstName
  function sortByFirstName(track) {
    let newArray = [];
    let arrToChange = [];
    for (let arr of track.interns) {
      arrToChange.push(arr);
    }
    arrToChange.forEach((intern, index) => {
      let earliestFirstname = intern;
      let firstName = intern.firstName;
      let internIndex = index;
      for (let i = 0; i < arrToChange.length; i++) {
        if (checkStr(firstName) > checkStr(arrToChange[i].firstName)) {
          firstName = arrToChange[i].firstName;
          internIndex = i;
          earliestFirstname = arrToChange[i];
        }
      }
      newArray.push(earliestFirstname);
      arrToChange[internIndex] = {
        ...earliestFirstname,
        firstName: 'z'.repeat(30),
      };
    });

    setCurrentTrack({
      track: track.track,
      interns: newArray,
    });
    console.log("sort track by first name");
  }
  //Sort by lastName
  function sortByLastName(track) {
    let newArray = [];
    let arrToChange = [];
    for (let arr of track.interns) {
      arrToChange.push(arr);
    }
    arrToChange.forEach((intern, index) => {
      let earliestFirstname = intern;
      let lastName = intern.lastName;
      let internIndex = index;
      for (let i = 0; i < arrToChange.length; i++) {
        if (checkStr(lastName) > checkStr(arrToChange[i].lastName)) {
          lastName = arrToChange[i].lastName;
          internIndex = i;
          earliestFirstname = arrToChange[i];
        }
      }
      newArray.push(earliestFirstname);
      arrToChange[internIndex] = {
        ...earliestFirstname,
        lastName: 'z'.repeat(35),
      };
    });

    setCurrentTrack({
      track: track.track,
      interns: newArray,
    });
    console.log("sort track by last name");
  }

  //HANDLE SORTING
  function handleSort(_, track = currentTrack) {
    if (patternToSort === sortingPatterns.lowestScore) {
      sortByLowest(track);
    } else if (patternToSort === sortingPatterns.highestScore) {
      sortByHighest(track);
    } else if (patternToSort === sortingPatterns.firstName) {
      sortByFirstName(track);
    } else if (patternToSort === sortingPatterns.lastName) {
      sortByLastName(track);
    }
  }

  function handleSortSelect(value, track = currentTrack) {
    if (value === sortingPatterns.lowestScore) {
      sortByLowest(track);
      setPatternSort(sortingPatterns.lowestScore);
    } else if (value === sortingPatterns.highestScore) {
      sortByHighest(track);
      setPatternSort(sortingPatterns.highestScore);
    } else if (value === sortingPatterns.firstName) {
      sortByFirstName(track);
      setPatternSort(sortingPatterns.firstName);
    } else if (value === sortingPatterns.lastName) {
      sortByLastName(track);
      setPatternSort(sortingPatterns.lastName);
    }
  }

  return (
    <div className="select-options-wrapper">
      <select className="select-track" onChange={handleSelectTrack}>
        <option>--Select Track--</option>
        <option>Frontend</option>
        <option>Backend</option>
        <option>Product Design</option>
        <option>Web3</option>
      </select>
      <select onChange={(e) => handleSortSelect(e.target.value)}>
        <option>--Sort--</option>
        <option>{sortingPatterns.highestScore}</option>
        <option>{sortingPatterns.lowestScore}</option>
        <option>{sortingPatterns.firstName}</option>
        <option>{sortingPatterns.lastName}</option>
      </select>
    </div>
  );
}
