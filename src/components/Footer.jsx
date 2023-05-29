import React from "react";
import styled from "styled-components";

function Footer({poster, title}) {
  return (<FooterDiv data-test="footer">
    <div>
          <img
            src={poster}
            alt="poster"
          />
        </div>
        <div>
          <p>{title}</p>
        </div>
  </FooterDiv>);
}

export default Footer;

const FooterDiv = styled.div`
  width: 100%;
  height: 120px;
  background-color: #c3cfd9;
  
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  font-size: 20px;
  position: fixed;
  bottom: 0;
  font-family: 'Roboto', sans-serif;

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
  `