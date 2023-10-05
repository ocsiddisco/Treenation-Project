import styled from "styled-components";

export const ComponentCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ComponentTwo = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  & h4 {
    margin: 4px 0 2px 0;
  }
  & p {
    padding: 0 10px 0 30px;
  }
    flex-direction: column-reverse;
    align-items: center;
  
`;

export const ComponentThree = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  & h4 {
    margin-top: 5px;
    padding: 0 10px 0 10px;
  }
`;
export const ComponentCenterColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ComponentBottom = styled.div`
  display: flex;
  justify-items: flex-end;
  align-items: flex-end;
`;
