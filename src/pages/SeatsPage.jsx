import styled from "styled-components";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Seats from "../components/Seats";
import Footer from "../components/Footer";

export default function SeatsPage() {
  const [seats, setSeats] = useState([]);
  const [isAvailable, setIsAvailable] = useState([]);
  const { sessionId } = useParams(); // Update this line to use useParams()

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
  return (
    <PageContainer>
      Selecione o(s) assento(s)
      {seats.seats && <Seats seats={seats.seats} />}
      <FormContainer>
        Nome do Comprador:
        <input placeholder="Digite seu nome..." />
        CPF do Comprador:
        <input placeholder="Digite seu CPF..." />
        <button>Reservar Assento(s)</button>
      </FormContainer>
      {/* <Footer poster={seats.movie.posterURL} title={seats.movie.title}></Footer> */}
      {seats.seats && <FooterContainer>
        <div>
          <img
            src={
              "https://br.web.img2.acsta.net/pictures/22/05/16/17/59/5165498.jpg"
            }
            alt="poster"
          />
        </div>
        <div>
          <p>{seats.movie.title}</p>
          <p>
            {seats.day.weekday} - {seats.name}
          </p>
        </div>
      </FooterContainer>}
    </PageContainer>
  );
}

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
  /* margin: 20px 0; */
  font-size: 18px;
  button {
    align-self: center;
    background-color: #e8833a;
    border-radius: 3px;
    width: 225px;
    height: 42px;
    border: none;
    color: white;
    margin-top: 10px;
  }
  input {
    width: calc(100vw - 150px);
    height: 50px;
    border: 1px solid #D5D5D5;
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
