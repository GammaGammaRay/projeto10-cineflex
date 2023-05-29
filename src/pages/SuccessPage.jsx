import React from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

export default function SuccessPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, cpf, title, time, date, reservedSeats } = location.state;

  const refresh = () => {
    navigate("/");
    location.state = null;
  };

  return (
    <PageContainer>
      <h1>
        Pedido feito <br /> com sucesso!
      </h1>

      <TextContainer data-test="movie-info">
        <strong>
          <p>Filme e sessão</p>
        </strong>
        <p>{title}</p>
        <p>
          {date} - {time}
        </p>
      </TextContainer>

      <TextContainer data-test="seats-info">
        <strong>
          <p>Ingressos</p>
        </strong>
        {reservedSeats.map((seat) => (
          <p key={seat}>Assento {seat}</p>
        ))}
        
      </TextContainer>

      <TextContainer data-test="client-info">
        <strong>
          <p>Comprador</p>
        </strong>
        <p>Nome: {name}</p>
        <p>CPF: {cpf}</p>
      </TextContainer>

      <button onClick={refresh} data-test="go-home-btn">Voltar para Home</button>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto";
  font-size: 24px;
  color: #293845;
  margin: 30px 20px;
  padding-top: 70px;
  a {
    text-decoration: none;
  }
  button {
    font-size: 18px;
    align-self: center;
    background-color: #e8833a;
    border-radius: 3px;
    width: 225px;
    height: 42px;
    border: none;
    color: white;
    margin-top: 50px;
  }
  h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #247a6b;
  }
`;
const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: normal;
  margin-top: 30px;
  strong {
    font-weight: bold;
    margin-bottom: 10px;
    letter-spacing: 0.04em;

  }
  p {
    margin-bottom: -20px;
  }
`;
