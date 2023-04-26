import React from "react";
import SelectBox from "../components/select/select";
import { SelectContainor } from "../components/select/select";

function Selects() {
  const Options = [
    { id: 1, value: "react", name: "리액트" },
    { id: 2, value: "java", name: "자바" },
    { id: 3, value: "spring", name: "스프링" },
    { id: 4, value: "reactnative", name: "리액트네이티브" },
  ];
  return (
    <>
      <h1>Select</h1>
      <SelectContainor>
        <SelectBox options={Options}></SelectBox>
      </SelectContainor>
    </>
  );
}

export default Selects;
