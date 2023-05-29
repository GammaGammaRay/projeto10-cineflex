import React, { useEffect } from "react";
import styled from "styled-components";

function Seat({
  name,
  id,
  isAvailable,
  isSelected,
  setSelectedSeats,
}) {
  const handleSeatClick = () => {
    if(!isAvailable) {
      alert("Esse assento não está disponível")
    }
    else {
      setSelectedSeats(id, name);
    }
  };

  return (
    <SeatItem
      isAvailable={isAvailable}
      onClick={handleSeatClick}
      isSelected={isSelected}
    >
      {name}
    </SeatItem>
  );
}

function Seats({
  seats,
  selectedSeats,
  setSelectedSeats,
  setSeatNumbers,
  seatNumbers,
}) {
  useEffect(() => {
    console.log(seatNumbers);
  }, [seatNumbers]);

  useEffect(() => {
    setSeatNumbers([]);
  }, []);

  const handleSeatSelection = (seatId, seatNumber) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((id) => id !== seatId));
      setSeatNumbers((seatNumbers) =>
        seatNumbers.filter((name) => name !== seatNumber)
      );
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
      setSeatNumbers([...seatNumbers, seatNumber]);
    }
  };


  return (
    <>
      <SeatsContainer>
        {seats.map(({ id, name, isAvailable }) => (
          <Seat
            key={id}
            id={id}
            name={name}
            isAvailable={isAvailable}
            setSelectedSeats={handleSeatSelection}
            isSelected={selectedSeats.includes(id)}
          />
        ))}
      </SeatsContainer>
      <CaptionContainer>
        <CaptionItem>
          <CaptionCircle isSelected={true} />
          Selecionado
        </CaptionItem>
        <CaptionItem>
          <CaptionCircle isAvailable={true} />
          Disponível
        </CaptionItem>
        <CaptionItem>
          <CaptionCircle isAvailable={false} />
          Indisponível
        </CaptionItem>
      </CaptionContainer>
    </>
  );
}

export default Seats;

const SeatItem = styled.div`
  background-color: ${({ isSelected, isAvailable }) =>
    isSelected ? "#1AAE9E" : isAvailable ? "#C3CFD9" : "#FBE192"};
  border: 1px solid
    ${({ isSelected, isAvailable }) =>
      isSelected ? "#0E7D71" : isAvailable ? "#808F9D" : "#F7C52B"};

  height: 25px;
  width: 25px;
  border-radius: 25px;
  font-family: "Roboto";
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 3px;
  user-select: none;
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
  background-color: ${({ isSelected, isAvailable }) =>
    isSelected ? "#1AAE9E" : isAvailable ? "#C3CFD9" : "#FBE192"};
  border: 1px solid
    ${({ isSelected, isAvailable }) =>
      isSelected ? "#0E7D71" : isAvailable ? "#808F9D" : "#F7C52B"};
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
