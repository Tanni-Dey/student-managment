import { useEffect, useState } from "react";

const Task = () => {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((data) => setMyData(data.data));
  }, []);
  console.log(myData);
  return (
    <div>
      {myData.map((singleData) => (
        <div key={singleData.id}>
          <h5>id: {singleData.id}</h5>
          <h5>email: {singleData.email}</h5>
          <h5>firstname : {singleData.first_name}</h5>
        </div>
      ))}
    </div>
  );
};

export default Task;
