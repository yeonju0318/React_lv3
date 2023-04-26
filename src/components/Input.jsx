import React, { useState } from "react";
import styled from "styled-components";
import Btn from "./Btn";

function Input() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const priceHandler = (e) => {
    const num = Number(e.target.value.replace(/,/g, "")); //,(콤마) 모두 제거
    if (!Number.isNaN(num)) {
      setPrice(num.toLocaleString()); //3자리마다 ,찍기
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (name.length == 0) {
      return alert(`이름과 가격 모두 입력해주세요!😜`);
    }
    alert(`{name: ${name} price: ${price.replace(/,/g, "")} }`);
    setName("");
    setPrice("");
  };

  return (
    <div>
      <H1>Input</H1>
      <InputForm>
        <label htmlFor="name">
          이름
          <InputBox type="text" id="name" value={name} onChange={nameHandler} />
        </label>
        <label htmlFor="price">
          가격
          <InputBox
            onChange={priceHandler}
            type="text"
            id="price"
            value={price}
          />
        </label>

        <Btn size="small" color="primary" onClick={submitHandler}>
          저장
        </Btn>
      </InputForm>
    </div>
  );
}

export default Input;

const InputForm = styled.form`
  display: flex;
  gap: 30px;
  align-items: center;
  margin-left: 10px;
`;
const H1 = styled.h1`
  display: block;
  font-size: 2em;
  margin: 20px;
  font-weight: bold;
`;

const InputBox = styled.input`
  margin: 10px;
  padding-left: 12px;
  padding-right: 12px;
  height: 40px;
  width: 200px;
  border: 1px solid black;
  border-radius: 8px;
`;
