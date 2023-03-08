import React from "react";
import styled from "styled-components";

const TodosBox = styled.div`
  width: 90%;
  background: #555;
  border-radius: 5px;
  padding: 2px;
  box-sizing: border-box;
  margin: 0 auto;
  margin-bottom: 8px;
`;

function Todos() {
  return <TodosBox></TodosBox>;
}

export default Todos;
