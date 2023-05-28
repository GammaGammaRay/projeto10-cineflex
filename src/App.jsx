import axios from "axios";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import HomePage from "./pages/HomePage";
import SeatsPage from "./pages/SeatsPage";
import SessionsPage from "./pages/SessionsPage";
import SuccessPage from "./pages/SuccessPage";

axios.defaults.headers.common["Authorization"] = "5wY65Pq5uCOFfh5yfnMVGhIF";

export default function App() {

  return (
    <BrowserRouter>
      <NavContainer>CINEFLEX</NavContainer>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sessions/:id" element={<SessionsPage />} />
        <Route path="/seats/:session" element={<SeatsPage />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const NavContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  z-index: 10;
  align-items: center;
  justify-content: center;
  background-color: #c3cfd9;
  color: #e8833a;
  font-family: "Roboto", sans-serif;
  font-size: 34px;
  position: fixed;
  top: 0;
  a {
    text-decoration: none;
    color: #e8833a;
  }
`;
