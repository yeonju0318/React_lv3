import React from "react";
import styled from "styled-components";
import { Button } from "../button/button";

export function Modal({ isOpen, children, closeModal }) {
  return (
    <>
      <Modalbg style={{ display: isOpen ? "block" : "none" }}>
        <Modalst>
          닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.
          <ModalWrapped>
            <Button
              onClick={closeModal}
              borderColor="#FAB1A0"
              backgroundColor="#FAB1A0"
              fontColor="#d63031"
            >
              닫기
            </Button>
            <Button borderColor="#55efc4" backgroundColor="#55efc4">
              확인
            </Button>
          </ModalWrapped>
          {children}
        </Modalst>
      </Modalbg>
    </>
  );
}

export function Modal2({ isOpen, children, closeModal2 }) {
  return (
    <>
      <Modalbg
        onClick={closeModal2}
        style={{ display: isOpen ? "block" : "none" }}
      >
        <Modalst>
          <p>
            닫기 버튼 1개가 있고,
            <br />
            외부 영역을 누르면 모달이 닫혀요.
          </p>
          <ModalWrapped>
            <Button
              onClick={closeModal2}
              borderColor="#FAB1A0"
              backgroundColor="#FAB1A0"
              fontColor="#d63031"
            >
              X
            </Button>
          </ModalWrapped>
          {children}
        </Modalst>
      </Modalbg>
    </>
  );
}

const Modalbg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modalst = styled.div`
  position: relative;
  width: 500px;
  height: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
`;

const ModalWrapped = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 200px;
  gap: 10px;
`;
