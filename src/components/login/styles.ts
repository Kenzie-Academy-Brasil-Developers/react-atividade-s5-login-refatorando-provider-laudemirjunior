import styled from "styled-components";

export const Form = styled.form`
  background-color: #ff0005;
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  border-radius: 20px;
  padding: 20px 0;
  border: 5px solid #959595;
  div {
    display: flex;
    flex-direction: column;
    span {
      font-size: 14px;
    }
    input {
      border: 1px solid #959595;
    }
    button {
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
  }
`;
