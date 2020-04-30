import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import DayForm from "../../components/DayForm/DayForm";
import DaysList from "../../components/DaysList/DaysList";
import styles from "./DaysPage.module.css";
import { parseAuthToken } from "../authUtils";
import * as actions from "../../core/actions";

const apiUrl = process.env.REACT_APP_API_URL;

const DaysPage = ({ currentUser, day, days, onLoad, onEdit, onAdd, onDelete, onUpdate }) => {

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${apiUrl}/days`, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      const userName = parseAuthToken();
      onLoad({days: res.data, currentUser: userName });
    };
    fetchData();
  }, [onLoad]);

  const handleDeleteDay = async id => {
    await axios.delete(`${apiUrl}/days/${id}`);
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
        `${apiUrl}/days`,
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
        `${apiUrl}/days/${day._id}`,
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
        userName={currentUser.username}
        deleteDay={handleDeleteDay}
        editDay={handleEditDay}
        days={days}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  days: state.days,
  day: state.currentDay,
  currentUser: state.currentUser
});

const mapDispatchToProps = dispatch => ({
  onLoad: data => dispatch(actions.loaded(data)),
  onEdit: data => dispatch(actions.editDay(data)),
  onDelete: id => dispatch(actions.deleteDay(id)),
  onAdd: data => dispatch(actions.addDay(data)),
  onUpdate: data => dispatch(actions.updateDays(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(DaysPage);
