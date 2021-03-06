import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Container from "./components/Container/Container";
import DaysPage from "./pages/DaysPage/DaysPage";
import AuthPage from "./pages/AuthPage/AuthPage";
import Navbar from "./components/Nav/Navbar/Navbar";
import Logout from "./components/Logout/Logout";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Navbar />
        <Route path='/' exact component={DaysPage} />
        <Route path='/access' exact component={AuthPage} />
        <Route path='/logout' exact component={Logout} />
      </Container>
    </BrowserRouter>
  );
}

export default App;
