import styled from "styled-components";

export const Container = styled.div`
  background-color: #121212;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 300px;
  }
`;

export const Form = styled.form`
  background-color: #ff0005;
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    position: absolute;
    width: 150px;
    height: 30px;
    background-color: #121212;
    border: 2px solid #959595;
    cursor: pointer;
    color: white;
    &:hover {
      filter: brightness(5);
    }
  }
`;
