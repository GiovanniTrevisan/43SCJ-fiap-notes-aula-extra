import styled from 'styled-components';

export const FilterStyled = styled.input`
  color: var(--primary);
  background-color: var(--bgPrimary);
  flex-grow: 1;
  position: absolute;
  top: 5px;
  right: 10px;
  width: calc(100% - 220px);

  height: 35px;

  border-radius: 5px;
  background: var(--gray);
  box-shadow:  4px 4px 8px #b60f46, -4px -4px 8px #ff1970;
  color: var(--black);

  transition: 0.3s;

  @media (max-width: 425px){
    width: calc(100% - 20px);
  }

  :hover{
  box-shadow:  2px 2px 4px #b60f46, -2px -2px 4px #ff1970;
  }

  :focus{
    box-shadow:  2px 2px 4px #b60f46, -2px -2px 4px #ff1970;
  }

  ::placeholder {
  color: var(--gray);
  opacity: 1;
}
`;
