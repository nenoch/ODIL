import React, { useState } from "react";
import axios from "axios";

const MainPage = () => {
  const [input, setInput] = useState({
    title: "",
    body: "",
    author: ""
  });

  const addJournal = async () => {
    const { title, body, author } = input;
    console.log("input", input);
    console.log("got here");

    const res = await axios.post(
      "http://localhost:8000/journals",
      {
        title,
        body,
        author
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  };

  const handleChangeField = (key, event) => {
    setInput({
      ...input,
      [key]: event.target.value
    });
  };

  const { title, body, author } = input;

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
          onChange={e => handleChangeField("body", e)}
          placeholder="content..."
          value={body}
        ></textarea>
        <input
          onChange={e => handleChangeField("author", e)}
          value={author}
          placeholder="Your name..."
        />
        <button onClick={addJournal}>
          Submit
        </button>
      </div>
    </>
  );
};

export default MainPage;
