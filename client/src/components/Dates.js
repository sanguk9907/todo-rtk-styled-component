import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { nextMonth, prevMonth } from "../features/datesSlice";

const Date = styled.h1`
  width: 50%;
  font-size: 30px;
  color: #fff;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
`;

const DaysWarp = styled.ul`
  width: 95%;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
`;

const Days = styled.li`
  width: calc(90% / 7);
  text-align: center;
  color: #fff;
  background: ${({ day }) =>
    day === "일" ? "#f75252" : day === "토" ? "#4734e5" : "#555"};
  border-radius: 10px;
  padding: 10px 0;
`;

const Button = styled.button`
  border: none;
  border-radius: 5px;
  padding: 5px;
  background: #7e20af;
  color: #fff;
  font-size: 16px;
`;

function Dates() {
  const year = useSelector((state) => state.dates.year);
  const month = useSelector((state) => state.dates.month);
  const date = useSelector((state) => state.dates.date);
  const days = "일월화수목금토".split("");
  const dispatch = useDispatch();
  return (
    <>
      <Date>
        <Button onClick={() => dispatch(nextMonth())}>next</Button>
        {`${year}년 ${month}월 ${date}일`}
        <Button onClick={() => dispatch(prevMonth())}>prev</Button>
      </Date>
      <DaysWarp>
        {days.map((item) => {
          return (
            <Days day={item} key={item}>
              {item}
            </Days>
          );
        })}
      </DaysWarp>
    </>
  );
}

export default Dates;
