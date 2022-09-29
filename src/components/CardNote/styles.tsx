import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.article`
  width: 200px;
  height: 200px;
  padding: 30px;
  position: relative;

  color: var(--white);

  border-radius: 15px;
  background: var(--backgroundNeumorphism);
  box-shadow:  var(--boxShadowNeumorphism);
  transition: 0.3s;

  :hover{
  box-shadow:  var(--boxShadowNeumorphismHover);
  }

  animation: ${fadeIn} ease-in .5s;

  p:first-child {
    font-size: 14px;
    margin-bottom: 10px;
    color: var(--gray);
  }

  .material-icons {
    position: absolute;
    bottom: 5px;
    right: 5px;
    font-size: 32px;
    transition: 0.3s;
  }

  .material-icons:not(#priority):hover  {
    color: #505050;
    transform: scale(1.2);
    cursor: pointer;
  }

  #priority {
    position: absolute;
    bottom: 5px;
    left: 5px;
    width: fit-content;
    cursor: default;
  }

  .material-icons.icon-edit{
    right: 40px;
  }

  @media (max-width: 425px){
    width: 100%;
  }
`;
