import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 450px;
  border-radius: 5px;
  background-color: #eee;

  -webkit-box-shadow: -2px 8px 15px -11px rgba(153, 153, 153, 1);
  -moz-box-shadow: -2px 8px 15px -11px rgba(153, 153, 153, 1);
  box-shadow: -2px 8px 15px -11px rgba(153, 153, 153, 1);

  transition: all 300ms;

  :hover {
    -webkit-box-shadow: 0px 14px 33px -11px rgba(153, 153, 153, 1);
    -moz-box-shadow: 0px 14px 33px -11px rgba(153, 153, 153, 1);
    box-shadow: 0px 14px 33px -11px rgba(153, 153, 153, 1);
  }
`;