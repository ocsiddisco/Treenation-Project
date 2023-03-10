import styled from "styled-components";

export const DetailsStyle = styled.div`
  @import url("./Font/OpenSans/OpenSans-Light.ttf");
  @import url("./Font/OpenSans/OpenSans-Regular.ttf");
  display: flex;
  flex-direction: column;

  width: 40em;
  margin: 10px 10px 10px 10px;
  align-self: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 15px 28px 25px -18px;
  color: #645f11;
  font-size: 1rem;
  line-height: 23px;
  padding: 0.75rem;
  text-decoration: none;
  transition: all 235ms ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px -5px;
    transform: translate3d(0, 2px, 0);
  }

  &:focus {
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 4px -6px;
  }

  & h1 {
    display: flex;
    justify-items: center;
    font-family: "OpenSans-Light", sans-serif;
    font-weight: 300;
  }

  & h4 {
    font-family: "OpenSans-Regular", sans-serif;
    margin-top: 5px;
    line-height: 1.3em;
    text-align: justify;
  }
`;
