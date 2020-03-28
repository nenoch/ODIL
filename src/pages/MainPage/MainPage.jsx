import React, { useState } from "react";
import DayForm from "../../components/DayForm/DayForm";
import DaysList from "../../components/DaysList/DaysList";
import styles from "./MainPage.module.css";

const MainPage = () => {
  const [day, setDay] = useState({
    title: "",
    content: "",
    author: ""
  });
  const [days, setDays] = useState([]);
  const [isEdit, setIsEdit] = useState();

  return (
    <div className={styles.Content}>
      <DayForm
        isEdit={isEdit}
        setDays={setDays}
        setIsEdit={setIsEdit}
        day={day}
        setDay={setDay}
      />
      <DaysList
        setDays={setDays}
        setIsEdit={setIsEdit}
        days={days}
        setDay={setDay}
      />
    </div>
  );
};

export default MainPage;
