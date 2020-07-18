import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 22%;
  height: 120px;
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

export const Content = styled(Container)`
  width: 100%;
  height: 100%;
`;

export const FloatCard = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  background-color: green;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 65%;
  border-bottom: 1px solid #cccccc;
`;

export const CardFooter = styled(CardHeader)`
  border-bottom: 0;
  height: 35%;
`;
