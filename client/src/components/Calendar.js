import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Days } from "./index";

const Body = styled.section`
  width: 95%;
  height: 80%;
  background: #555;
  border-radius: 20px;
  display: flex;
  justify-content: space-around;
  align-content: space-around;
  flex-wrap: wrap;
`;

function Calendar() {
  const year = useSelector((state) => state.dates.year);
  const month = useSelector((state) => state.dates.month);
  const changeDate = () => {
    //이전 날짜
    let preveLastDay = new Date(year, month - 1, 0).getDay();
    let preveLastDate = new Date(year, month - 1, 0).getDate();
    const thisLastyDay = new Date(year, month, 0).getDay();
    const thisLastyDate = new Date(year, month, 0).getDate();

    //이전 날짜 만들기
    let PVLD = [];
    if (preveLastDay !== 6) {
      for (let i = 0; i < preveLastDay + 1; i++) {
        PVLD.unshift(preveLastDate - i);
      }
    }
    //다음 날짜 만들기
    let TLD = [];
    for (let i = 1; i < 7 - thisLastyDay; i++) {
      if (i === 0) {
        return TLD;
      }
      TLD.push(i);
    }

    //현재날짜
    let TD = [];

    TD = [...Array(thisLastyDate + 1).keys()].slice(1);

    return PVLD.concat(TD, TLD);
  };

  console.log(changeDate());

  return (
    <Body>
      {changeDate().map((item, index) => {
        return (
          <Days
            item={item}
            index={index}
            monthLength={changeDate().length}
            key={`Day-${index + 1}`}
          ></Days>
        );
      })}
    </Body>
  );
}

export default Calendar;
