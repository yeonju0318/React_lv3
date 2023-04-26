import styled from "styled-components";

const SelectBox = (props) => {
  return (
    <SelectWrapper>
      <Select>
        {props.options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.name}
          </option>
        ))}
      </Select>
    </SelectWrapper>
  );
};

export default SelectBox;

export const SelectContainor = styled.div`
  display: flex;
  overflow: hidden;
  height: 100px;
  border: 3px solid lightgray;
  margin-top: 50px;
  gap: 10px;
`;

const SelectWrapper = styled.div`
  position: relative;
`;

const Select = styled.select`
  padding: 10px 30px;
  border: 1px solid gray;
  border-radius: 10px;
`;
