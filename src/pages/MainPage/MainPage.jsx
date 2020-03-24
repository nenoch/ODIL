import React, { useState } from "react";
import DayForm from "../../components/DayForm/DayForm";
import DaysList from "../../components/DaysList/DaysList";

const MainPage = () => {
  const [day, setDay] = useState({
    title: "",
    content: "",
    author: ""
  });
  const [days, setDays] = useState([]);
  const [isEdit, setIsEdit] = useState();

  return (
    <>
      <DayForm
        isEdit={isEdit}
        setDays={setDays}
        setIsEdit={setIsEdit}
        days={days}
        day={day}
        setDay={setDay}
      />
      <DaysList
        setDays={setDays}
        setIsEdit={setIsEdit}
        days={days}
        setDay={setDay}
      />
    </>
  );
};

export default MainPage;
