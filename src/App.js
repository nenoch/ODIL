import React from "react";
import "./App.css";
import Container from "./components/Container/Container";
import DaysPage from "./pages/DaysPage/DaysPage";
import Navbar from "./components/Nav/Navbar/Navbar";

function App() {
  return (
    <Container>
      <Navbar />
      <DaysPage />
    </Container>
  );
}

export default App;
