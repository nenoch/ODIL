import React from "react";
import "./App.css";
import Container from "./components/Container/Container";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  return (
    <Container>
      <h1 className="Title">One Day in Life</h1>
      <MainPage />
    </Container>
  );
}

export default App;
