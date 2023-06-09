import axios from "axios";
import { useNavigate } from "react-router-dom";
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
      <NavContainer>
        <BackButton/>
        <NavTitle>CINEFLEX</NavTitle>
      </NavContainer>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sessoes/:id" element={<SessionsPage />} />
        <Route path="/assentos/:sessionId" element={<SeatsPage />} />
        <Route path="/sucesso" element={<SuccessPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
    location.state = null;
  };

  return <BackButtonContainer data-test="go-home-header-btn" onClick={handleBack}>◄</BackButtonContainer>;
};

const NavContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  z-index: 10;
  align-items: center;
  justify-content: center;
  background-color: #c3cfd9;
  color: #e8833a;
  font-family: "Roboto", sans-serif;
  font-size: 34px;
  position: fixed;
  top: 0;
  left: 0;
  a {
    text-decoration: none;
    color: #e8833a;
  }
`;

const BackButtonContainer = styled.div`
  font-size: 30px;
  font-weight: 700;
  position: absolute;
  left: 20px;
`;

const NavTitle = styled.div`
  color: #e8833a;
`;
