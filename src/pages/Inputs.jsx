import React from "react";
import { StyledInput, InputContainor } from "../components/input/input";
import { Button } from "../components/button/button";
import { useState } from "react";

function Inputs() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const onNameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const onPriceChangeHandelr = (event) => {
    const value = event.target.value;
    //콤마 제거
    const parsedValue = value.replace(/,/g, "");
    //정규식으로 세자리수 마다 콤마 삽입
    const formattedValue = parsedValue.replace(/\B(?=(\d{3})+(?!\d))/g, "$&,");
    setPrice(formattedValue);
  };

  const save = () => {
    alert(`name : ${name} price : ${price.replace(/,/g, "")}`);
  };

  return (
    <>
      <h1>Input</h1>
      <InputContainor>
        이름
        <StyledInput value={name} onChange={onNameChangeHandler} type="text" />
        가격
        <StyledInput
          type="text"
          value={price}
          onChange={onPriceChangeHandelr}
        />
        <Button onClick={save} borderColor="#55efc4" backgroundColor="#55efc4">
          저장
        </Button>
      </InputContainor>
    </>
  );
}

export default Inputs;
