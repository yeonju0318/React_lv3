import React from "react";
import styled from "styled-components";
import { Button } from "../button/button";

function Modal({ isOpen, children, closeModal }) {
  return (
    <>
      <Modalbg style={{ display: isOpen ? "block" : "none" }}>
        <Modalst>
          닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.
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
          {children}
        </Modalst>
      </Modalbg>
    </>
  );
}

export default Modal;

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
  width: 300px;
  height: 500px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
  text-align: center;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
`;
