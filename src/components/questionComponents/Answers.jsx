import React from "react";

export default function Answers({ answer }) {
  let d = new Date(answer.date);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let year = d.getFullYear();
  let month = months[d.getMonth()];
  let day = d.getDay();

  return (
    <div>
      <li>
        {answer.body}
        <br />
        by {answer.answerer_name} {month}, {day}, {year} | Helpful? Yes {"("}
        {answer.helpfulness}
        {")"} | Report
      </li>
    </div>
  );
}