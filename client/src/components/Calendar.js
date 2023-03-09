import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Modal from "./Modal";
import { modalOn } from "../features/modalSlice";
import { insert } from "../features/todoSlice";

// import { Days } from "./index";

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

const Days = styled.div`
  width: calc(90% / 7);
  height: ${({ monthLength }) =>
    monthLength <= 35 ? "calc(90% / 5)" : "calc(90% / 6)"};
  background: #333;
  border-radius: 10px;
  text-align: center;
  color: #ddd;
  opacity: ${({ index, item }) =>
    index + 1 < item || (index > 20 && 10 > item) ? "0.7" : "1"};
  cursor: pointer;
  position: relative;
  &:hover ${Todos} {
    top: 45%;
  }
`;

const Todos = styled.div`
  width: 90%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: 0.5s;
`;

function Calendar() {
  const state = useSelector((state) => state.todos);
  const year = useSelector((state) => state.dates.year);
  const month = useSelector((state) => state.dates.month);
  const onModal = useSelector((state) => state.modal.on);
  const todoList = useSelector((state) => state.todos.todoList);
  const dispatch = useDispatch();
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

  const listCount = (date) => {
    return todoList.filter((item) => {
      return item.year === year && item.month === month && item.date === date;
    });
  };

  React.useEffect(() => {
    dispatch(insert(state));
  }, []);

  return (
    <Body>
      {changeDate().map((item, index) => {
        return (
          <Days
            item={item}
            index={index}
            monthLength={changeDate().length}
            key={`Day-${index + 1}`}
            onClick={() => dispatch(modalOn(`${year}-${month}-${item}`))}
          >
            {item}
            <br />

            {listCount(item).length > 0 ? (
              <Todos className="todolist">
                할 일 {listCount(item).length}개
              </Todos>
            ) : (
              ""
            )}
          </Days>
        );
      })}
      {onModal && <Modal />}
    </Body>
  );
}

export default Calendar;
