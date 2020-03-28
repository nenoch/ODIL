import React, { useState, useEffect } from "react";
import "../../App.css";
import styles from "./DayForm.module.css";

const DayForm = ({ isEdit, day, addDay }) => {
  const [input, setInput] = useState(day);

  useEffect(() => {
    setInput(day);
  }, [day]);

  const handleChangeField = (key, event) => {
    setInput({
      ...input,
      [key]: event.target.value
    });
  };

  const { title, content, author } = input;

  return (
    <div className={styles.FormContainer}>
      <input
        className={styles.Field}
        onChange={e => handleChangeField("title", e)}
        value={title}
        placeholder="Title"
      />
      <textarea
        className={styles.Field}
        onChange={e => handleChangeField("content", e)}
        placeholder="Content"
        value={content}
      ></textarea>
      <input
        className={styles.Field}
        onChange={e => handleChangeField("author", e)}
        value={author}
        placeholder="Author"
      />
      <button className="Button" onClick={() => addDay(input)}>
        {isEdit ? "Save" : "Submit"}
      </button>
    </div>
  );
};

export default DayForm;
