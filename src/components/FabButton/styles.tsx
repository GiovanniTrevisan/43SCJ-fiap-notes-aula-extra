import styled from "styled-components";

interface PropsFab {
  position: string;
}

export const FabButtonStyled = styled.button<PropsFab>`
  position: absolute;
  ${(props) => (props.position === "left" ? "left: 5px;" : "right: 5px;")}
  top: 5px;
  color: white;

  background-color: transparent;
  color: var(--primary);
  font-size: 15px;
  font-weight: bold;

  width: 30px;
  height: 30px;
  border-radius: 25px;
  border: 1px solid var(--primary);

  border-radius: 36px;
background: linear-gradient(145deg, #d51252, #fe1561);
box-shadow:  5px 5px 9px #c5114c,
             -5px -5px 9px #ff176a;

  transition: 0.2s;
  cursor: pointer;

  :hover {
    font-weight: normal;
    color: var(--white);
    border-radius: 36px;
background: linear-gradient(145deg, #d51252, #fe1561);
box-shadow:  8px 8px 15px #c5114c,
             -8px -8px 15px #ff176a;
    ${(props) => (props.position === "left" ? "transform: scale(2) translateX(5px) translateY(5px);" : "transform: scale(2) translateX(-5px) translateY(5px);")}
  }

  span {
    font-size: 12px;
  }
`;
