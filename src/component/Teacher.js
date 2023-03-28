import React, { useState } from "react";

import Person from "../Person.json";
function Teacher() {
  const [teacherList, setTeacherList] = useState(Person);

  const teacherAllList = teacherList
    .filter((item) => item.profession === "teacher")
    .map((tTeacher) => (
      <li>
        {tTeacher.firstName} {tTeacher.lastName} <br /> Professesion:{" "}
        {tTeacher.subject} <br /> E-mail :{tTeacher.email} <hr />
      </li>
    ));

  return (
    <div>
      <h1>Teacher List:</h1>
      <ol> {teacherAllList}</ol>
    </div>
  );
}

export default Teacher;
