import styled from "styled-components";

export const StyledCard = styled.div`
  @import url("./Font/OpenSans/OpenSans-Light.ttf");
  @import url("./Font/OpenSans/OpenSans-Regular.ttf");

  width: 25em;
  margin: 10px 10px 10px 10px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.2) 15px 28px 25px -18px;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
  padding: 0.75rem;
  text-decoration: none;
  transition: transform 0.5s ease, 0.45s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  & h1 {
    display: flex;
    font-family: "OpenSans-Light", sans-serif;
    font-weight: 300;
    line-height: 1.2em;
    color: #645f11;
  }

  & h4 {
    font-family: "OpenSans-Regular", sans-serif;
    color: #645f11;
    line-height: 1.3em;
    text-align: justify;
  }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px -5px;
    transform: scale(1.02);
    background-color: #645f11;

    & h1,
    h4 {
      color: white;
    }
  }
`;
