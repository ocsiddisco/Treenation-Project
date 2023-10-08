import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
font-size: 1rem;
  background-color: rgb(224 171 102);
  margin: 20px 20px 0 20px;
  padding: 15px;
  border-radius: 15px 50px;
  height: 125px;
  justify-content: space-around;
`;

export const RequestButton = styled.button`
  background-color: whitesmoke;
  border-radius: 100px;
  box-shadow: 1px 1px 1px whitesmoke;
  color: green;
  cursor: pointer;
  display: inline-block;
  padding: 5px 15px;
  text-align: center;
  transition: all 250ms;
  border: 0;
  font-size: 1rem;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: fit-content;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Text = styled.span`
  color: whitesmoke;
`;

export const Justify = styled.div`
  display: flex;
  justify-content: end;
`;
