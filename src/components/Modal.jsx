import React, { useState } from "react";
import styled from "styled-components";
import Btn from "./Btn";

function Modal() {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);

  const openFirstModal = () => {
    setModal1(true);
  };
  const closeFirstModal = () => {
    setModal1(false);
  };
  const openSecondModal = () => {
    setModal2(true);
  };
  const closeSecondModal = () => {
    setModal2(false);
  };
  return (
    <div>
      <H1>Modal</H1>
      <BtnWrap>
        <Btn size="small" color="primary" onClick={openFirstModal}>
          open modal
        </Btn>
        <Btn size="large" color="negative" onClick={openSecondModal}>
          open modal
        </Btn>
      </BtnWrap>
      {modal1 && (
        <div>
          <Outside />
          <Modal1Wrap>
            <p>
              닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지
              않아요.
            </p>
            <ModalBtnWrap>
              <Btn size="small" color="negative" onClick={closeFirstModal}>
                닫기
              </Btn>
              <Btn size="small" color="primary">
                확인
              </Btn>
            </ModalBtnWrap>
          </Modal1Wrap>
        </div>
      )}
      {modal2 && (
        <div>
          <Outside onClick={closeSecondModal} />
          <Modal2Wrap>
            <XBtn onClick={closeSecondModal}>X</XBtn>
            <p>
              닫기 버튼 1개가 있고, <br />
              외부 영역을 누르면 모달이 닫혀요.
            </p>
          </Modal2Wrap>
        </div>
      )}
    </div>
  );
}

export default Modal;

const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  align-items: center;
  margin-left: 10px;
`;
const Outside = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  z-index: 5;
`;
const Modal1Wrap = styled.div`
  width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 6;
  background-color: white;
  border-radius: 12px;
`;

const ModalBtnWrap = styled.div`
  display: flex;
  gap: 10px;
`;

const H1 = styled.h1`
  display: block;
  font-size: 2em;
  margin: 20px;
  font-weight: bold;
`;

const Modal2Wrap = styled.div`
  position: absolute;
  z-index: 6;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  box-sizing: border-box;
  padding: 24px;
  background-color: white;
  width: 300px;
  height: 200px;
`;

const XBtn = styled.button`
  position: absolute;
  right: 10px;
  border: 1px solid rgb(221, 221, 221);
  width: 40px;
  height: 40px;
  border-radius: 100%;
  cursor: pointer;
  &:hover {
    border: 1px solid black;
  }
`;
