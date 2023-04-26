import styled from "styled-components";

export const Button = ({
  borderColor,
  backgroundColor,
  fontColor,
  fontWeight,
  width,
  height,
  children,
  onClick,
}) => {
  return (
    <StyledButton
      bordercolor={borderColor}
      backgroundcolor={backgroundColor}
      fontcolor={fontColor}
      fontweight={fontWeight}
      width={width}
      height={height}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 10px;
  padding: 10px 30px;
  background-color: ${(props) => props.backgroundcolor};
  border: 3px solid ${(props) => props.bordercolor};
  color: ${(props) => props.fontcolor};
  font-weight: ${(props) => props.fontweight};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  &:active {
    filter: brightness(60%);
  }
`;

export const ButtonContainor = styled.div`
  display: flex;
  padding: 0px 10px 10px 10px;
  gap: 20px;
`;
