import React from "react";
import styled from "styled-components";
import Btn from "./Btn";
import { IoIosArrowForward } from "react-icons/io";
import { SlBell } from "react-icons/sl";

const BtnSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-left: 10px;
`;

const H1 = styled.h1`
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  margin-left: 10px;
`;

function BtnContainer() {
  const priBtnClickHandler = () => alert(`버튼을 만들어보세요!😊`);
  const negBtnClickHandler = () => prompt(`어렵나요?😧`);
  return (
    <BtnSection>
      <H1>Button</H1>
      <BtnWrapper>
        <Btn
          size="large"
          color="primary"
          icon={IoIosArrowForward}
          onClick={priBtnClickHandler}
        >
          Large Primary Button &nbsp;
          <IoIosArrowForward />
        </Btn>
        <Btn size="medium" color="primary">
          Medeium
        </Btn>
        <Btn size="small" color="primary">
          Small
        </Btn>
      </BtnWrapper>
      <BtnWrapper>
        <Btn
          size="large"
          color="negative"
          icon={SlBell}
          onClick={negBtnClickHandler}
        >
          Large Negative Button &nbsp;
          <SlBell color="black" size="15" />
        </Btn>
        <Btn size="medium" color="negative">
          Medeium
        </Btn>
        <Btn size="small" color="negative">
          Small
        </Btn>
      </BtnWrapper>
    </BtnSection>
  );
}

export default BtnContainer;
