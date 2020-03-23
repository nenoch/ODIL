import React, { useState, useEffect } from "react";
import axios from "axios";

const MainPage = () => {
  const initalState = {
    title: "",
    content: "",
    author: ""
  };

  const [day, setDay] = useState(initalState);
  const [days, setDays] = useState([]);
  const [isEdit, setIsEdit] = useState();

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

  const addDay = async () => {
    const { title, content, author } = day;
    if (!isEdit) {
      const res = await axios.post(
        "http://localhost:8000/days",
        {
          title,
          content,
          author
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      setDays(days.concat(res.data));
    } else {
      const updatedRes = await axios.patch(
        `http://localhost:8000/days/${day._id}`,
        {
          title,
          content,
          author
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      // Find old instance and replace with updated
      const updatedDays = days.map(d => (d._id === updatedRes.data._id) ? updatedRes.data : d)
      setDays(updatedDays);
      setIsEdit(false);
      setDay(initalState);
    }
  };

  const deleteDay = async id => {
    await axios.delete(`http://localhost:8000/days/${id}`);
    setDays(days.filter(day => day._id !== id));
  };

  const editDay = async day => {
    setIsEdit(true);
    setDay(day);
  };

  const handleChangeField = (key, event) => {
    setDay({
      ...day,
      [key]: event.target.value
    });
  };

  const { title, content, author } = day;

  return (
    <>
      <h1>One Day in Life</h1>
      <div>
        <input
          onChange={e => handleChangeField("title", e)}
          value={title}
          placeholder="title..."
        />
        <textarea
          onChange={e => handleChangeField("content", e)}
          placeholder="content..."
          value={content}
        ></textarea>
        <input
          onChange={e => handleChangeField("author", e)}
          value={author}
          placeholder="Your name..."
        />
        <button onClick={addDay}>{isEdit ? "Save" : "Submit"}</button>
      </div>
      <div>
        {days.map(day => (
          <div key={day._id}>
            <h4>{day.title}</h4>
            <button onClick={() => deleteDay(day._id)}>Delete</button>
            <button onClick={() => editDay(day)}>Update</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default MainPage;
