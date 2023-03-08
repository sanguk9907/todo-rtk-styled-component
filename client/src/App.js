import "./App.css";
import styled from "styled-components";
import { Dates, Calendar } from "./components";

const Body = styled.body`
  width: 100vw;
  height: 100vh;
  background: #333;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <Body>
      <Dates />
      <Calendar />
    </Body>
  );
}

export default App;
