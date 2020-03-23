import React, { useState, useEffect } from "react";
import axios from "axios";

const MainPage = () => {
  const [input, setInput] = useState({
    title: "",
    content: "",
    author: ""
  });

  const [days, setDays] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "http://localhost:8000/days",
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      setDays((res.data));
    }
    fetchData();
  }, []);

  const addDay = async () => {
    const { title, content, author } = input;

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
  };

  const handleChangeField = (key, event) => {
    setInput({
      ...input,
      [key]: event.target.value
    });
  };

  const { title, content, author } = input;

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
        <button onClick={addDay}>Submit</button>
      </div>
      <div>
        {days.map(day => (
          <h4 key={day._id}>{day.title}</h4>
        ))}
      </div>
    </>
  );
};

export default MainPage;
