import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Footer from "../components/Footer";
import Session from "../components/Session";

function SessionsPage() {
  const [sessions, setSessions] = useState([]);
  const { id } = useParams();
  console.log("id: ", id);
  useEffect(() => {
    getSessions();
  }, []);

  function getSessions() {
    console.log("id:", id);
    const movieId = parseInt(id);
    const sessionsURL = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${movieId}/showtimes`;
    console.log("sessions: ", sessions);

    axios
      .get(sessionsURL)
      .then((response) => {
        console.log("sessions: ", response.data);
        const days = response.data.days;
        const extractedSessions = days.flatMap((day) => day.showtimes);
        setSessions(extractedSessions);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }

  return (
    <>
      <h2>Selecione o horário</h2>
      <SessionsList sessions={sessions} />
      <Footer></Footer>
    </>
  );
}

function SessionsList({ sessions }) {
  return (
    <ListContainer>
      {sessions.map((session) => (
        <Link to={`/session/${session.id}`} key={session.id}>
          <Session session={session} />
        </Link>
      ))}
    </ListContainer>
  );
}

export default SessionsPage;

const PageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: "Roboto";
  font-size: 24px;
  text-align: center;
  color: #293845;
  margin-top: 30px;
  padding-bottom: 120px;
  padding-top: 70px;
  div {
    margin-top: 20px;
  }
  h2 {
    font-size: 24px;
  }
`;

const ListContainer = styled.div`
  width: 330px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;

const Loading = styled.div`
  display: inline-block;
  overflow: hidden;
  vertical-align: bottom;
  -webkit-animation: ellipsis steps(4, end) 900ms infinite;
  animation: ellipsis steps(4, end) 900ms infinite;
  content: "\2026";
  width: 0px;

  @keyframes ellipsis {
    to {
      width: 40px;
    }
  }

  @-webkit-keyframes ellipsis {
    to {
      width: 40px;
    }
  }
`;
