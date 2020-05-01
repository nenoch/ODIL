import React from "react";
import "../../App.css";
import styles from "./DaysList.module.css";

const DaysList = ({ userId, deleteDay, days, editDay }) => {
  const isAuthor = (day) => userId === day.author;

  return (
    <div className={styles.DaysListContainer}>
      {days.map((day) => (
        <div key={day._id}>
          <h4>{day.title}</h4>
          <p>{day.content}</p>
          {isAuthor(day) && (
            <>
              <button className="Button" onClick={() => deleteDay(day._id)}>
                Delete
              </button>
              <button className="Button" onClick={() => editDay(day)}>
                Update
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default DaysList;
