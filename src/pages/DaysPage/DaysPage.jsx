import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import DayForm from "../../components/DayForm/DayForm";
import DaysList from "../../components/DaysList/DaysList";
import styles from "./DaysPage.module.css";

const DaysPage = ({ day, days, onLoad, onEdit }) => {

  const [currentDays, setCurrentDays] = useState(days);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:8000/days", {
        headers: {
          "Content-Type": "application/json"
        }
      });
      onLoad(res.data);
    };
    fetchData();
  }, []);

  const handleDeleteDay = async id => {
    await axios.delete(`http://localhost:8000/days/${id}`);
    setCurrentDays(days.filter(day => day._id !== id));
  };

  const handleEditDay = async day => {
    setIsEdit(true);
    onEdit(day);
  };

  const handleAddDay = async (input) => {
    const { title, content, author } = input;
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
      setCurrentDays(days.concat(res.data));
      // setDay({
      //   title: "",
      //   content: "",
      //   author: ""
      // });
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
      setCurrentDays(updatedDays);
      setIsEdit(false);
      // setDay({
      //   title: "",
      //   content: "",
      //   author: ""
      // });
    }
  };

  const [isEdit, setIsEdit] = useState();

  return (
    <div className={styles.Content}>
      <DayForm
        isEdit={isEdit}
        addDay={handleAddDay}
      />
      <DaysList
        deleteDay={handleDeleteDay}
        editDay={handleEditDay}
        days={days}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  days: state.days,
  day: state.currentDay
});

const mapDispatchToProps = dispatch => ({
  onLoad: data => dispatch({ type: "DAYS_LOADED", data }),
  onEdit: data => dispatch({ type: "EDIT_DAY", data })
});

export default connect(mapStateToProps, mapDispatchToProps)(DaysPage);
