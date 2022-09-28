import styled from "styled-components";

export const Container = styled.section`
  height: fit-content;
  padding: 60px 22px;
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
    top: 5px;
    font-size: 16px;
    height: 35px;
    border-radius: 5px;
    background: transparent;
    color: #ffffff;
    border: 1px solid #ddd;
    left: 10px;
    padding: 0px 20px;
    min-width: 190px;
    cursor: pointer;

    box-shadow:  4px 4px 8px #b60f46, -4px -4px 8px #ff1970;

    @media (max-width: 425px){
      position: absolute;
      right: 10px;
      left: 10px;
      top: 50px;
      height: 40px;
  }

  }
  .select-order option{
    color: #ed145b;
  }
  
`;
