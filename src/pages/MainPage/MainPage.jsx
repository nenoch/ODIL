import React, { useState } from "react";
import axios from "axios";

const MainPage = () => {
  const [input, setInput] = useState(undefined);
  const [weather, setWeather] = useState({});

  const addPost = async event => {
    event.preventDefault();
    const res = await axios.post(
      "http://localhost:8000/todos",
      { title: input },
      {
        headers: {
          // "Authorization": "Bearer falafel",
          "Content-Type": "application/json"
        }
      }
    );
    console.log(res.data);
  };

  const getWeather = async data => {
    const res = await axios.get(
      `https://weather-service-api.getimpala.com/api/v1/weather?latitude=${data.latitude}&longitude=${data.longitude}`,
      {
        headers: {
          "Authorization": "Bearer falafel",
          "Content-Type": "application/json"
        }
      }
    );
    setWeather(res.data);
  };

  const umbrellaRequired =
    weather.chanceOfRain >= 0.5 && weather.accuracyOfReport >= 0.75 ? true : false;

  const handleInput = event => {
    event.preventDefault();
    setInput(event.target.value);
  };

  return (
    <>
      <h1>One Day in Life</h1>
      <div>
        <form onSubmit={addPost}>
          <input type="text" onChange={handleInput} placeholder="write something..." />
          <button type="submit">Save</button>
        </form>
      </div>
      <div>
          <h4>{umbrellaRequired ? "Take the Umbrella!" : "Leave the Umbrella home!"}</h4>
      </div>
    </>
  );
};

export default MainPage;
