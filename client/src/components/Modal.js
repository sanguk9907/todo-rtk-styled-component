import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { modalOff } from "../features/modalSlice";
import { createTodo, insert } from "../features/todoSlice";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
`;

const ModalBox = styled.div`
  width: 50%;
  height: 70%;
  background: #333;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  padding: 50px 20px;
  overflow: hidden;
  z-index: 9999;
`;

const Date = styled.h2`
  color: #fff;
  text-align: center;
`;

const Title = styled(Date)`
  width: 100%;

  margin: 30px auto;
`;

const TodosUl = styled.ul`
  width: 100%;
  height: 70%;
  margin: 0 auto;
  padding: 10px 0;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Todos = styled.li`
  text-align: center;
  color: #fff;
  padding: 10px 20px;
  margin-top: 15px;
  border-radius: 100px;
  background: #555;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

const Input = styled.input`
  width: 100%;
  line-height: 30px;
  padding: 10px;
  border: none;
  outline: none;
  position: absolute;
  bottom: 0;
  left: 0;
  border-radius: 0 0 20px 20px;
  font-size: 18px;
`;

const ModalOff = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
`;

function Modal() {
  const state = useSelector((state) => state.todos);
  const date = useSelector((state) => state.modal.selcetedDate);
  const content = useSelector((state) => state.todos.content);
  const list = useSelector((state) => state.todos.todoList);
  const dispatch = useDispatch();

  return (
    <Background>
      <ModalOff
        onClick={() => {
          dispatch(modalOff());
        }}
      />
      <ModalBox>
        <Date>{date}</Date>
        <Title>할일목록</Title>
        <TodosUl>
          {list.map((item, index) => {
            return `${item.year}-${item.month}-${item.date}` === date ? (
              <Todos>{item.content}</Todos>
            ) : (
              ""
            );
          })}
        </TodosUl>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(insert(state));
            console.log(list);
          }}
        >
          <Input
            value={content}
            onChange={(e) => {
              dispatch(createTodo({ date: date, content: e.target.value }));
            }}
            placeholder="추가할 일을 입력해주세요"
          ></Input>
        </form>
      </ModalBox>
    </Background>
  );
}

export default Modal;
