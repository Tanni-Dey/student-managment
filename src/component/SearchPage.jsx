import React, { useEffect, useState } from "react";
import "./SearchPage.css";

const SearchPage = () => {
  const [student, setStudents] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const studentId = e.target.id.value;
    const studentSession = e.target.session.value;
    setStudents({});
    setErrorMessage("");
    // useEffect(() => {
    fetch(
      `http://localhost:5000/student?id=${studentId}&session=${studentSession}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.id) {
          return setErrorMessage(
            "Doesn't matched student with your information"
          );
        } else {
          return setStudents(data);
        }
      });

    // }, []);
  };

  return (
    <>
      <h2>Student Management</h2>
      <form className="form-container" onSubmit={handleSearch}>
        <input type="text" required name="id" placeholder="enter student id" />
        <input
          type="text"
          required
          name="session"
          placeholder="enter student session"
        />
        <input type="submit" value="Search" />
      </form>
      {student.id ? (
        <div className="card">
          <h5 className="title">{student.name}</h5>
          <h6 className="content">ID : {student.id}</h6>
          <h6 className="content">Session : {student.session}</h6>
          <h6 className="content">Class : {student.class}</h6>
        </div>
      ) : (
        <h4>{errorMessage}</h4>
      )}
    </>
  );
};

export default SearchPage;
