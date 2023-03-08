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

function Days({ item, index, monthLength }) {
  return (
    <DayBox item={item} index={index} monthLength={monthLength}>
      {item}
    </DayBox>
  );
}

export default Days;
