import React from "react";
import styled from "styled-components";

function Btn({ size, color, onClick, children }) {
  const colorHandler = (color) => {
    switch (color) {
      case "primary":
        return `border: 3px solid #55EFC4; background-color: #55EFC4`;
      case "negative":
        return `border: 3px solid #FAB1A0; color: rgb(214, 48, 49); background-color: #FAB1A0`;
    }
  };

  const sizeHandler = (size) => {
    switch (size) {
      case "large":
        return `width: 185px; height: 45px; background-color: white; font-weight: bold;`;
      case "medium":
        return `width: 120px; height: 40px; font-weight:500`;
      case "small":
        return `width: 90px; height: 35px; font-weight:500`;
    }
  };

  const Btn = styled.div`
    ${() => colorHandler(color)};
    ${() => sizeHandler(size)};
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    cursor: pointer;
    &:active {
      filter: brightness(60%);
    }
  `;

  return <Btn onClick={onClick}>{children}</Btn>;
}

export default Btn;
