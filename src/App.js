import React from "react";
import "./App.css";
import Container from "./components/Container/Container";
import MainPage from "./pages/MainPage/MainPage";
import Navbar from "./components/Nav/Navbar/Navbar";

function App() {
  return (
    <Container>
      <Navbar />
      <MainPage />
    </Container>
  );
}

export default App;
