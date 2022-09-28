import styled from "styled-components";

interface PropsFab {
  position: string;
}

export const FabButtonStyled = styled.button<PropsFab>`
  position: fixed;
  ${(props) => (props.position === "left" ? "left: 30px;" : "right: 30px;")}
  bottom: 30px;
  color: white;

  background-color: transparent;
  color: var(--primary);
  font-size: 15px;
  font-weight: bold;

  width: 50px;
  height: 50px;
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

    background: #b31248;
    
    box-shadow:  8px 8px 15px #c5114c,
             -8px -8px 15px #ff176a;
  }

  span {
    font-size: 12px;
  }
`;
