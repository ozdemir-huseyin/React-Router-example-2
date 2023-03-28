import React from "react";
import { useState } from "react";

import Person from "../Person.json";

function Student() {
  const [studentList, setStudentList] = useState(Person);
  const studentAllList = studentList
    .filter((item) => item.profession === "student")
    .map((sStudent) => (
      <li>
        {sStudent.firstName} {sStudent.lastName} <br /> Profession:
        {sStudent.profession} <br /> E-mail :{sStudent.email} <hr />
      </li>
    ));

  return (
    <div>
      <h1>Student List:</h1>
      <ol>{studentAllList}</ol>
    </div>
  );
}

export default Student;
