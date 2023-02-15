import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  background-color: rgb(138, 89, 26);
  margin: 20px;
  padding: 20px;
  border-radius: 15px 50px;
`;

export const RequestButton = styled.button`
  background-color: whitesmoke;
  border-radius: 100px;
  box-shadow: 1px 1px 1px whitesmoke;
  color: green;
  cursor: pointer;
  display: inline-block;
  font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;
  padding: 7px 20px;
  text-align: center;
  transition: all 250ms;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 13em;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Text = styled.span`
  color: whitesmoke;
  font-size: 25px;
  padding: 10px;
`;

export const Justify = styled.div`
  display: flex;
  justify-content: end;
`;
