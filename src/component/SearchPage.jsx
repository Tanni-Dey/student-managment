import React, { useEffect, useState } from "react";

const SearchPage = () => {
  const [student, setStudents] = useState({});

  const handleSearch = (e) => {
    e.preventDefault();
    const studentId = e.target.id.value;
    const studentSession = e.target.session.value;
    // useEffect(() => {
    fetch(
      `http://localhost:5000/student?id=${studentId}&session=${studentSession}`
    )
      .then((res) => res.json())
      .then((data) => setStudents(data));
    // }, []);
  };

  return (
    <>
      <form onSubmit={handleSearch}>
        <input type="text" required name="id" placeholder="enter student id" />
        <input
          type="text"
          required
          name="session"
          placeholder="enter student session"
        />
        <input type="submit" value="Search" />
      </form>
      {student.id && (
        <div>
          <h5>{student.name}</h5>
          <h6>ID : {student.id}</h6>
          <h6>Session : {student.session}</h6>
          <h6>Class : {student.class}</h6>
        </div>
      )}
    </>
  );
};

export default SearchPage;
