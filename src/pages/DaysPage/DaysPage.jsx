import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import DayForm from "../../components/DayForm/DayForm";
import DaysList from "../../components/DaysList/DaysList";
import styles from "./DaysPage.module.css";

const env = process.env.NODE_ENV || 'development';
const config = require(`../../config/${env}`);

const DaysPage = ({ day, days, onLoad, onEdit, onAdd, onDelete, onUpdate }) => {
  console.log("env", process.env.NODE_ENV);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${config.apiUrl}/days`, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      onLoad(res.data);
    };
    fetchData();
  }, [onLoad]);

  const handleDeleteDay = async id => {
    await axios.delete(`${config.apiUrl}/days/${id}`);
    onDelete(id);
  };

  const handleEditDay = async day => {
    setIsEdit(true);
    onEdit(day);
  };

  const handleAddDay = async input => {
    const { title, content, author } = input;
    if (!isEdit) {
      const res = await axios.post(
        `${config.apiUrl}/days`,
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
      onAdd(res.data);
    } else {
      const updatedRes = await axios.patch(
        `${config.apiUrl}/days/${day._id}`,
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
      onUpdate(updatedRes.data);
      setIsEdit(false);
    }
    onEdit({
      title: "",
      content: "",
      author: ""
    });
  };

  const [isEdit, setIsEdit] = useState();

  return (
    <div className={styles.Content}>
      <DayForm isEdit={isEdit} addDay={handleAddDay} day={day} />
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
  onEdit: data => dispatch({ type: "EDIT_DAY", data }),
  onDelete: id => dispatch({ type: "DELETE_DAY", id }),
  onAdd: data => dispatch({ type: "ADD_DAY", data }),
  onUpdate: data => dispatch({ type: "UPDATE_DAYS", data })
});

export default connect(mapStateToProps, mapDispatchToProps)(DaysPage);
