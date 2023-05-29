import styled from "styled-components";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Seats from "../components/Seats";

export default function SeatsPage() {
  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [seatNumbers, setSeatNumbers] = useState([]);
  const [buyerCpf, setBuyerCpf] = useState(null);
  const [buyerName, setBuyerName] = useState(null);

  const { sessionId } = useParams();

  // GET SEATS
  useEffect(() => {
    getSeats();
  }, []);

  function getSeats() {
    const seatsURL = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${sessionId}/seats`;

    const promise = axios.get(seatsURL);

    promise
      .then((response) => {
        console.log(response.data);
        setSeats(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }

  // POST SEATS
  function postData() {
    const data = {
      ids: selectedSeats,
      name: buyerName,
      cpf: buyerCpf,
    };

    console.log(data);

    axios
      .post(
        "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many",
        data
      )
      .then(reservationSuccess)
      .catch(reservationError);
  }

  const navigate = useNavigate();

  function reservationSuccess() {
    console.log("Reservation Successful");
    console.log({seatNumbers});
    navigate("/success", {
      state: {
        name: buyerName,
        cpf: buyerCpf,
        title: seats.movie.title,
        time: seats.name,
        date: seats.day.date,
        reservedSeats: seatNumbers
      },
    });
  }

  function reservationError(error) {
    if (error.response) {
      console.log("Error: " + error.response.status);
    } else {
      console.log("Error: Unknown");
    }
  }

  const handleBuyerNameChange = (e) => {
    setBuyerName(e.target.value);
  };

  const handleCpfChange = (e) => {
    setBuyerCpf(e.target.value);
  };

  const submitForm = () => {
    if (!isValidName(buyerName)) {
      alert("Por favor digite seu nome completo");
      return;
    }
    if (!isValidCPF(buyerCpf)) {
      alert("Por favor digite seu cpf, usando o formato xxx.xxx.xxx-xx");
      return;
    } else {
      postData();
    }
  };

  // RENDER
  return (
    <PageContainer>
      Selecione o(s) assento(s)
      {seats.seats && (
        <Seats
          seats={seats.seats}
          selectedSeats={selectedSeats}
          setSelectedSeats={setSelectedSeats}
          seatNumbers={seatNumbers}
          setSeatNumbers={setSeatNumbers}
        />
      )}
      <FormContainer>
        <p>Nome do Comprador:</p>
        <input
          onChange={handleBuyerNameChange}
          placeholder="Digite seu nome..."
        />
        <p>CPF do Comprador:</p>
        <input onChange={handleCpfChange} placeholder="Digite seu CPF..." />
        <button onClick={submitForm}>Reservar Assento(s)</button>
      </FormContainer>
      {seats.seats && (
        <FooterContainer>
          <div>
            <img src={`${seats.movie.posterURL}`} alt="poster" />
          </div>
          <div>
            <p>{seats.movie.title}</p>
            <p>
              {seats.day.weekday} - {seats.name}
            </p>
          </div>
        </FooterContainer>
      )}
    </PageContainer>
  );
}

// INPUT VALIDATION

function isValidName(name) {
  const pattern = /^([a-zA-Z]+)\s+([a-zA-Z]+(\s+[a-zA-Z]+)*)$/;
  return pattern.test(name);
}

function isValidCPF(cpf) {
  const pattern = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  return pattern.test(cpf);
}

// STYLED COMPONENTS

const PageContainer = styled.div`
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
`;

const FormContainer = styled.div`
  width: calc(100vw - 40px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 18px;
  line-height: 0.5;
  button {
    align-self: center;
    background-color: #e8833a;
    border-radius: 3px;
    width: 225px;
    height: 42px;
    border: none;
    color: white;
    margin-top: 30px;
  }
  input {
    width: calc(100vw - 150px);
    height: 50px;
    border: 1px solid #d5d5d5;
    font-weight: 400;
    font-size: 18px;

    ::placeholder {
      color: #afafaf;
      font-style: italic;
    }
  }
`;

const FooterContainer = styled.div`
  width: 100%;
  height: 120px;
  background-color: #c3cfd9;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 20px;
  position: fixed;
  bottom: 0;

  div:nth-child(1) {
    box-shadow: 0px 2px 4px 2px #0000001a;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    margin: 12px;
    img {
      width: 50px;
      height: 70px;
      padding: 8px;
    }
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    p {
      text-align: left;
      &:nth-child(2) {
        margin-top: 10px;
      }
    }
  }
`;
