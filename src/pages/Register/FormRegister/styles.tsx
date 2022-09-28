import styled, { keyframes } from "styled-components";
import { Form as FormikForm } from "formik";

const fadeIn = keyframes`
  from {
    transform: translateY(-300px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  
  border-radius: 36px;
  background: linear-gradient(145deg, #d51252, #fe1561);
  box-shadow:  26px 26px 52px #c9114d,
             -26px -26px 52px #ff1769;

  animation: ${fadeIn} .2s;

  h1 {
    align-self: center;
    margin-bottom: 10px;
  }

  a {
    color: var(--white);
    align-self: center;

    :hover{
      color: var(--primary);
    }
  }
`;
