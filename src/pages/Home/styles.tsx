import styled from "styled-components";

export const Container = styled.section`
  height: fit-content;
  padding: 60px 30px 30px;
  flex: 1;

  @media (max-width: 425px){
    padding: 110px 30px;
  }

  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  align-items: flex-start;
  .select-order{
    position: absolute;
    top: 2px;
    font-size: 16px;
    font-weight: bold;
    height: 35px;
    border-radius: 10px;
    background: transparent;
    color: #ffffff;
    border: 1px solid #ed145b;
    right: 50px;
    padding: 0px 30px;
    cursor: pointer;

    border-radius: 13px;
    box-shadow:  4px 4px 8px #b60f46, -4px -4px 8px #ff1970;

    @media (max-width: 425px){
      position: absolute;
      right: 40px;
      left: 40px;
      top: 50px;
      height: 40px;
  }

  }
  .select-order option{
    color: #ed145b;
  }
  
`;
