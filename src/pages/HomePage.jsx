import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  function getMovies() {
    const moviesURL = "https://mock-api.driven.com.br/api/v8/cineflex/movies";

    const promise = axios.get(moviesURL);

    promise
      .then((response) => {
        console.log(response.data);
        setMovies(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }

  function openMovie(id) {
    // history.push(`/sessions/${id}`);
  }

  return (
    <PageContainer>
      <PageTitle>
        <h2>Selecione o filme</h2>
      </PageTitle>
      <ListContainer>
        {movies.map((movie) => (
          <Link to={`/sessions/${movie.id}`} key={movie.id}>
            <MovieItem>
              <img src={movie.posterURL} alt={movie.title} />
            </MovieItem>
          </Link>
        ))}
      </ListContainer>
    </PageContainer>
  );
}

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
  padding-top: 70px;
  h2 {
    font-size: 24px;
  }
`;

const PageTitle = styled.div`
  width: 100%;
  height: 110px;
`;
const ListContainer = styled.div`
  width: 330px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;
const MovieItem = styled.div`
  width: 145px;
  height: 210px;
  box-shadow: 0px 2px 4px 2px #0000001a;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  &:hover {
    transform: scale(1.1);
  }
  img {
    width: 130px;
    height: 190px;
  }
`;
