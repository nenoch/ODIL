import React, { useEffect } from "react";
import axios from "axios";

const DaysList = ({setDays, days, setDay, setIsEdit}) => {
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:8000/days", {
        headers: {
          "Content-Type": "application/json"
        }
      });
      setDays(res.data);
    };
    fetchData();
  }, []);

  const deleteDay = async id => {
    await axios.delete(`http://localhost:8000/days/${id}`);
    setDays(days.filter(day => day._id !== id));
  };

  const editDay = async day => {
    setIsEdit(true);
    setDay(day);
  };

  return (
    <div>
      {days.map(day => (
        <div key={day._id}>
          <h4>{day.title}</h4>
          <button onClick={() => deleteDay(day._id)}>Delete</button>
          <button onClick={() => editDay(day)}>Update</button>
        </div>
      ))}
    </div>
  );
};

export default DaysList;
