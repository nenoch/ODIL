import React from "react";
import axios from "axios";
import "../../App.css";
import styles from "./DayForm.module.css";

const DayForm = ({ isEdit, setDays, setIsEdit, days, day, setDay }) => {
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
      setDay({
        title: "",
        content: "",
        author: ""
      })
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
      const updatedDays = days.map(d =>
        d._id === updatedRes.data._id ? updatedRes.data : d
      );
      setDays(updatedDays);
      setIsEdit(false);
      setDay({
        title: "",
        content: "",
        author: ""
      });
    }
  };

  const handleChangeField = (key, event) => {
    setDay({
      ...day,
      [key]: event.target.value
    });
  };

  const { title, content, author } = day;

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
      <button className="Button" onClick={addDay}>
        {isEdit ? "Save" : "Submit"}
      </button>
    </div>
  );
};

export default DayForm;
