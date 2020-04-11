import React from "react";
import "../../App.css";
import styles from "./DaysList.module.css";

const DaysList = ({ deleteDay, days, editDay }) => {
  const isAuthor = (day) => {
    const token = localStorage.getItem("auth-token");
    const parsedToken = JSON.parse(window.atob(token.split(".")[1]));
    const loggedName = parsedToken.name;
    return loggedName === day.author;
  };

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
