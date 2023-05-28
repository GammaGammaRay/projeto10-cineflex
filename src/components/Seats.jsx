import React from "react";
import styled from "styled-components";

function Seat({ name, isAvailable }) {
  return <SeatItem isAvailable={isAvailable}>{name}</SeatItem>;
}

function Seats({ seats }) {
  const { id, name, isAvailable } = seats;
  console.log("seats: ", seats);
  return (
    <>
      <SeatsContainer>
        {seats.map((seat) => (
          <Seat key={seat.id} name={seat.name} isAvailable={seat.isAvailable} />
        ))}
        {/* <SeatItem>01</SeatItem>
        <SeatItem>02</SeatItem>
        <SeatItem>03</SeatItem>
        <SeatItem>04</SeatItem>
        <SeatItem>05</SeatItem> */}
      </SeatsContainer>
      <CaptionContainer>
        <CaptionItem>
          <CaptionCircle />
          Selecionado
        </CaptionItem>
        <CaptionItem>
          <CaptionCircle />
          Disponível
        </CaptionItem>
        <CaptionItem>
          <CaptionCircle />
          Indisponível
        </CaptionItem>
      </CaptionContainer>
    </>
  );
}

export default Seats;

const SeatItem = styled.div`
  border: 1px solid ${({ isAvailable }) => (isAvailable ? "blue" : "red")};
  background-color: ${({ isAvailable }) =>
    isAvailable ? "lightblue" : "lightgray"};

  height: 25px;
  width: 25px;
  border-radius: 25px;
  font-family: "Roboto";
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 3px;
`;

const SeatsContainer = styled.div`
  width: 330px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
const CaptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  justify-content: space-between;
  margin: 20px;
`;
const CaptionCircle = styled.div`
  border: 1px solid blue; // Essa cor deve mudar
  background-color: lightblue; // Essa cor deve mudar
  height: 25px;
  width: 25px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 3px;
`;
const CaptionItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
`;
