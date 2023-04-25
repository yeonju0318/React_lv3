import React from "react";
import { Button, ButtonContainor } from "../components/button/button";
import { AiOutlineRight } from "react-icons/ai";
import { VscBellDot } from "react-icons/vsc";

function Buttons() {
  return (
    <>
      <h1>Button</h1>
      <ButtonContainor>
        <Button
          onClick={() => alert("버튼을 만들어보세요")}
          borderColor="#55efc4"
          backgroundColor="#ffffff"
          fontWeight="bold"
          width="250px"
          height="50px"
        >
          Large Primary Button &nbsp;
          <AiOutlineRight />
        </Button>
        <Button
          borderColor="#55efc4"
          backgroundColor="#55efc4"
          width="130px"
          height="45px"
        >
          Medium
        </Button>
        <Button
          borderColor="#55efc4"
          backgroundColor="#55efc4"
          width="100px"
          height="40px"
        >
          Small
        </Button>
      </ButtonContainor>
      <ButtonContainor>
        <Button
          onClick={() => prompt("어렵나요?")}
          borderColor="#FAB1A0"
          backgroundColor="#ffffff"
          fontWeight="bold"
          width="250px"
          height="50px"
        >
          Large Negative Button
          <VscBellDot style={{ fontSize: "16px" }} />
        </Button>
        <Button
          borderColor="#FAB1A0"
          backgroundColor="#FAB1A0"
          width="130px"
          height="45px"
        >
          Medium
        </Button>
        <Button
          borderColor="#FAB1A0"
          backgroundColor="#FAB1A0"
          width="100px"
          height="40px"
        >
          Small
        </Button>
      </ButtonContainor>
    </>
  );
}

export default Buttons;
