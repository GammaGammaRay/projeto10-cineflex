import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Footer from "../components/Footer";
import SessionsList from "../components/SessionsList";

function SessionsPage() {
  const [sessions, setSessions] = useState([]);
  const { id } = useParams();
  const movieId = parseInt(id);

  useEffect(() => {
    getSessions();
  }, []);

  function getSessions() {
    const sessionsURL = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${movieId}/showtimes`;

    axios
      .get(sessionsURL)
      .then((response) => {
        setSessions(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }

  return (
    <>
    <PageContainer>
      <h2>Selecione o horário</h2>
      {sessions.days && <SessionsList days={sessions.days} />}
      <Footer poster={sessions.posterURL} title={sessions.title}></Footer>

    </PageContainer>
    </>
  );
}


export default SessionsPage;

const PageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto";
  font-size: 24px;
  text-align: center;
  color: #293845;
  margin-top: 30px;
  padding-bottom: 120px;
  padding-top: 70px;
  
  h2 {
    font-size: 24px;
    text-align: left;
  }
`;

