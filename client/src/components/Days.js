import React from "react";
import styled from "styled-components";

const DayBox = styled.div`
  width: calc(90% / 7);
  height: ${({ monthLength }) =>
    monthLength <= 35 ? "calc(90% / 5)" : "calc(90% / 6)"};
  background: #333;
  border-radius: 10px;
  //   display: flex;
  //   flex-direction: column;
  text-align: center;
  color: #ddd;
  opacity: ${({ index, item }) =>
    index + 1 < item || (index > 20 && 10 > item) ? "0.7" : "1"};
  cursor: pointer;
`;
const Todos = styled.div`
  width: 90%;
  background: #555;
  border-radius: 5px;
  padding: 2px;
  box-sizing: border-box;
  margin: 0 auto;
  margin-bottom: 8px;
`;

function Days({ item, index, monthLength }) {
  return (
    <DayBox item={item} index={index} monthLength={monthLength}>
      {item}
      <Todos>dd</Todos>
    </DayBox>
  );
}

export default Days;
