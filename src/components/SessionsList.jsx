import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function SessionsList({ days }) {
  return (
    <ListContainer>
      {days.map((day) => (
        <SessionsOnDate day={day} key={day.id} />
      ))}
    </ListContainer>
  );
}

export default SessionsList;

function SessionsOnDate({ day }) {
  const { weekday, date, showtimes } = day;
  return (
    <SessionContainer data-test="movie-day">
      {weekday} - {date}
      <ButtonsContainer>
        {showtimes.map((time) => (
          <Link to={`/seats/${time.id}`}  key={time.id} >
            <button data-test="showtime">{time.name}</button>
          </Link>
        ))}
      </ButtonsContainer>
    </SessionContainer>
  );
}

const ListContainer = styled.div`
  width: 330px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;

const SessionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: "Roboto";
  font-size: 20px;
  color: #293845;
  padding: 0 20px;
`;
const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 0;
  button {
    margin-right: 20px;
    background: #e8833a;
    border-radius: 3px;
    width: 80px;
    height: 35px;
    border: none;
    opacity: 0.8;

    &:hover {
      scale: 1.1;
      opacity: 1;
    }
  }
  a {
    text-decoration: none;
  }
`;
