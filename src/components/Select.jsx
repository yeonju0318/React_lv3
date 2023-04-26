import React, { useState } from "react";
import styled from "styled-components";

function Select({}) {
  let option = ["리액트", "자바", "스프링", "노드"];
  const [listShow, setListShow] = useState(false); // 기본 값: 닫혀 있음
  const [selectedItem, setSelectedItem] = useState(option[0]);

  const openList = () => {
    listShow ? setListShow(false) : setListShow(true);
  };

  const selectOption = (item) => {
    setSelectedItem(item);
    setListShow(false);
  };

  return (
    <Wrap>
      <H1>Select</H1>
      <StSelectBtn onClick={openList}>
        <div> {selectedItem}</div>
        <Icon>▼</Icon>
      </StSelectBtn>
      {listShow && (
        <div>
          <Options>
            {option.map((item) => {
              return (
                <StSelectBtn
                  onClick={() => selectOption(item)}
                  onMouseOver={(event) =>
                    (event.target.style.background = "#e4e4dc")
                  }
                  onMouseOut={(event) => {
                    event.target.style.background = "#ffffff";
                  }}
                >
                  {item}
                </StSelectBtn>
              );
            })}
          </Options>
        </div>
      )}
    </Wrap>
  );
}

export default Select;
const Options = styled.div`
  width: 245px;
  height: 40px;
  margin: 0;
  padding-left: 0;
  list-style: none;
  position: absolute;
`;
const StSelectBtn = styled.button`
  height: 40px;
  width: 300px;
  border-radius: 12px;
  border: 1px solid rgb(221, 221, 221);
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: row;
  //justify-content: space-around;
  padding: 0px 22px;
  align-items: center;
  cursor: pointer;
`;
const Wrap = styled.div`
  border: 3px solid lightgrey;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 200px;
  margin: 50px 10px 0px 10px;
`;
const Icon = styled.div`
  margin-left: 200px;
`;
const H1 = styled.h1`
  display: block;
  font-size: 2em;
  margin: 20px;
  font-weight: bold;
`;
